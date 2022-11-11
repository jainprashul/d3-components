import React, { useEffect } from 'react'
import { createOverlayClass } from './overlayClass';
import GoogleMapReact from 'google-map-react'
import { asset } from '../../assets'
import AutoCompleteBox from '../shared/AutoCompleteBox'
import { GmapApi } from '../../types/GmapApi'
import { useMap } from '../shared/useMap'
import '../../styles/map.css'

export type Location = {
    lat: number,
    lng: number,
    address?: string
    x?: number
    y?: number
}

export type MapData = {
    center: Location,
    zoom: number,
    markerA: Location,
    markerB: Location,
    heading: number,
}

let defaultData = {
    center: { lat: 62.323907, lng: -150.109291 },
    zoom: 11,
    heading : 0,
    markerA: {
        // lat : 62.281819, lng: -150.287132,
        lat: 62.323907 - (0.042088),
        lng: -150.109291 - (0.177841),
    },
    markerB: {
        // lat : 62.400471, lng: -150.005608,
        lat: 62.323907 - (-0.076564),
        lng: -150.109291 - (-0.103683),

    },
    xdim: 700,
    ydim: 500,
}


type Props = {
    xdim?: number
    ydim?: number
    center?: Location,
    setCenter: (center: Location) => void,
    zoom?: number,
    heading ?: number,
    getMapData: (data: MapData) => void,
    imgSrc?: string,
    markerA?: Location,
    markerB?: Location,
    size?: 'small' | 'medium' | 'large'
    showAddressInput?: boolean
    apiKey: string
}

const OverlayMap = ({
    xdim = defaultData.xdim,
    ydim = defaultData.ydim,
    center = defaultData.center,
    heading : _heading = defaultData.heading,
    setCenter,
    markerA: _markerA = defaultData.markerA,
    markerB: _markerB = defaultData.markerB,
    zoom: _zoom = defaultData.zoom,
    imgSrc = asset.floorPlan,
    getMapData,
    size = 'medium',
    showAddressInput = true,
    apiKey
}: Props) => {

    const {
        map, setMap,
        zoom, setZoom,
        mapDraggable, setMapDraggable,
        _generateAddress, updatePlace,
        rotateMap,
    } = useMap(center, _zoom, _heading)

    const [markerA, setMarkerA] = React.useState<Location>(_markerA)
    const [markerB, setMarkerB] = React.useState<Location>(_markerB)

    const [overlay, setOverlay] = React.useState<any>(null)

    useEffect(() => {
        if (map) {
            const OverlayClass = createOverlayClass(map.api, {
                setMarkerA,
                setMarkerB,
            })

            const toggleButton = document.createElement("button");
            toggleButton.innerHTML = '<span class="material-symbols-outlined">opacity</span>';
            toggleButton.classList.add("custom-map-control-button");

            const resetBtn = document.createElement("button");
            resetBtn.innerHTML = '<span class="material-symbols-outlined">lock_reset</span>';
            resetBtn.classList.add("custom-map-control-button");

            const rotateLeftBtn = document.createElement("button");
            rotateLeftBtn.innerHTML = '<span class="material-symbols-outlined">rotate_left</span>';;
            rotateLeftBtn.classList.add("custom-map-control-button");

            const rotateRightBtn = document.createElement("button");
            rotateRightBtn.innerHTML = '<span class="material-symbols-outlined">rotate_right</span>';;
            rotateRightBtn.classList.add("custom-map-control-button");

            // reset button
            resetBtn.addEventListener("click", () => {
                overlay.reset();
            });

            // click and hold to rotate
            let rotateInterval: any;
            rotateLeftBtn.addEventListener("mousedown", () => {
                rotateInterval = setInterval(() => {
                    rotateMap(-1)
                }, 50)
            });
            rotateLeftBtn.addEventListener("mouseup", () => {
                clearInterval(rotateInterval)
            });
            rotateLeftBtn.addEventListener("mouseleave", () => {
                clearInterval(rotateInterval)
            });

            rotateRightBtn.addEventListener("mousedown", () => {
                rotateInterval = setInterval(() => {
                    rotateMap(1)
                }, 50)
            });
            rotateRightBtn.addEventListener("mouseup", () => {
                clearInterval(rotateInterval)
            });

            rotateRightBtn.addEventListener("mouseleave", () => {
                clearInterval(rotateInterval)
            });

            toggleButton.addEventListener("click", () => {
                overlay.toggleOpacity();
            });

            map.instance.controls[google.maps.ControlPosition.TOP_RIGHT].push(resetBtn);
            map.instance.controls[google.maps.ControlPosition.TOP_RIGHT].push(toggleButton);
            map.instance.controls[google.maps.ControlPosition.LEFT_CENTER].push(rotateLeftBtn);
            map.instance.controls[google.maps.ControlPosition.RIGHT_CENTER].push(rotateRightBtn);

            let bounds = new map.api.LatLngBounds(
                new map.api.LatLng(markerA.lat, markerA.lng),
                new map.api.LatLng(markerB.lat, markerB.lng),
            )

            console.log('bounds', bounds)
            // set an overlay which can be used to place img which can be dragged , scaled and rotated
            const overlay = new OverlayClass(bounds, imgSrc);
            overlay.setMap(map.instance);
            setOverlay(overlay)

            // set the map to the heading of the overlay
            setTimeout(() => {
                rotateMap(1, _heading)
            }, 500)
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map])

    // handles the updating the overlay when the markers are changed
    useEffect(() => {
        if (overlay && map) {
            let bounds = new map.api.LatLngBounds(new map.api.LatLng(markerA.lat, markerA.lng),
                new map.api.LatLng(markerB.lat, markerB.lng))
            overlay.updateBounds(bounds)
        }
    }, [markerA, markerB, overlay, map])

    // send the map data to the parent component when map parameters change
    useEffect(() => {
        if (map) {
            let addr = _generateAddress(center.lat, center.lng)
            addr.then((address) => {
                getMapData({
                    center: {
                        lat: center.lat,
                        lng: center.lng,
                        address
                    },
                    zoom,
                    markerA,
                    markerB,
                    heading : map.instance.getHeading() || 0
                })
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center, markerA, markerB, zoom])


    const MarkerA = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <span className='marker'></span>

    return (
        <div style={{ height: '100%', margin: '2px', width: xdim }}>
            {
                (showAddressInput && map?.apiLoaded) && (
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                    }}>
                        <AutoCompleteBox map={map} updatePlace={updatePlace} />
                    </div>
                )
            }
            <div style={{
                width: xdim,
                height: showAddressInput ? ydim - 34 : ydim,
                border: '1px solid black',
                marginTop: '4px',

            }}>

                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: apiKey,
                        libraries: ['places']
                    }}
                    draggable={mapDraggable}
                    center={center}
                    zoom={zoom}

                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps: mapAPI, ref }) => {
                        console.log(map, mapAPI, ref)
                        const data ={
                                apiLoaded: true,
                                instance: map as google.maps.Map,
                                api: mapAPI as GmapApi,
                                ref: ref as HTMLElement
                            }

                        setMap(data)
                    }}
                    onChange={({ center, zoom, bounds, marginBounds }) => {
                        console.log(center, zoom, bounds, marginBounds)
                        setCenter(center)
                        setZoom(zoom)
                        if (map) {
                            let bounds = new map.api.LatLngBounds(
                                new map.api.LatLng(markerA.lat, markerA.lng),
                                new map.api.LatLng(markerB.lat, markerB.lng)
                            )
                            overlay.updateBounds(bounds)
                        }
                    }}
                    options={{ controlSize: 20, mapId: "90f87356969d889c", heading: _heading, rotateControl: true, zoomControl: true, fullscreenControl: false }}
                    onChildMouseDown={(childKey, childProps, mouse) => {
                        // console.log("Mouse Down",  childKey, childProps, mouse)
                        setMapDraggable(false)
                    }}
                    onChildMouseUp={(childKey, childProps, mouse) => {
                        // console.log("Child Click UP", childKey, childProps, mouse)
                        setMapDraggable(true)
                    }}
                    onChildClick={(childKey, childProps) => {
                        console.log("Child click ", childKey, childProps)
                    }}
                    onChildMouseMove={(childKey, childProps, mouse) => {
                        // console.log("Child Mouse Move", childKey, mouse)

                        // Move the Marker A
                        if (childKey === "0") {
                            setMarkerA({
                                lat: mouse.lat,
                                lng: mouse.lng,
                                ...mouse
                            })
                        }
                        // Move the Marker B
                        if (childKey === "1") {
                            setMarkerB({
                                lat: mouse.lat,
                                lng: mouse.lng,
                                ...mouse
                            })
                        }
                    }}
                >

                    {/* <ImageOverLay key={0} lat={markerA.lat} lng={markerA.lng} /> */}
                    <MarkerA
                        key={0}
                        lat={markerA.lat}
                        lng={markerA.lng}
                    />
                    <MarkerA
                        key={1}
                        lat={markerB.lat}
                        lng={markerB.lng}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default OverlayMap