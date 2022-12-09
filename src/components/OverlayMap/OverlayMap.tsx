import React, { useCallback, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import AutoCompleteBox from '../shared/AutoCompleteBox';
import { GmapApi } from '../../types/GmapApi';
import { createOverlayClass, CustomOverlay } from './overlayClass';
import { MAPSTATE, MarkerData, useMap } from '../shared/useMap';
import { asset } from '../../assets'
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
    markerCenter?: Location,
    heading?: number,
}

let defaultData = {
    center: { lat: 62.323907, lng: -150.109291 },
    zoom: 11,
    heading: 0,
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
    heading?: number,
    getMapData: (data: MapData) => void,
    imgSrc?: string,
    markerA?: Location,
    markerB?: Location,
    showAddressInput?: boolean
    apiKey: string
    mapDraggable?: boolean
    mapRotateable?: boolean
    planDraggable?: boolean
    mapZoomable?: boolean
    dataMarkers?: MarkerData[],
    showButtons?: boolean,
    fullscreenControl?: boolean,
    selectedMarkerID?: string | number,
    getMarkerData?: (data: MarkerData) => void,
    mapFunctions?: (map: MAPSTATE) => void,
    children?: React.ReactNode
}

const OverlayMap = ({
    xdim = defaultData.xdim,
    ydim = defaultData.ydim,
    center = defaultData.center,
    heading: _heading = defaultData.heading,
    setCenter,
    markerA: _markerA = defaultData.markerA,
    markerB: _markerB = defaultData.markerB,
    zoom: _zoom = defaultData.zoom,
    imgSrc = asset.floorPlan,
    getMapData,
    showAddressInput = true,
    mapDraggable: _draggable = true,
    planDraggable = true,
    mapZoomable = true,
    mapRotateable = true,
    showButtons = true,
    fullscreenControl = true,
    dataMarkers = [],
    selectedMarkerID,
    getMarkerData,
    mapFunctions,
    children,
    apiKey
}: Props) => {

    const {
        map, setMap,
        zoom, setZoom,
        mapDraggable, setMapDraggable,
        _generateAddress, updatePlace,
        rotateMap, loadDataMarkers,
    } = useMap(center, _zoom, _draggable)

    const [markerA, setMarkerA] = React.useState<Location>(_markerA)
    const [markerB, setMarkerB] = React.useState<Location>(_markerB)

    const [overlay, setOverlay] = React.useState<CustomOverlay | null>(null)
    const [opacity, setOpacity] = React.useState<string>('0.6')
    const selectedMarkerInstance = React.useRef<google.maps.Marker>()
    const boundCenter = React.useRef<Location>(center)

    function AddOverlay(map: MAPSTATE, imgSrc: string) {
        // if any overlay exists, remove it
        if (overlay) {
            overlay.setMap(null)
        }

        let bounds = new map.api.LatLngBounds(
            new map.api.LatLng(markerA.lat, markerA.lng),
            new map.api.LatLng(markerB.lat, markerB.lng),
        )

        // set an overlay which can be used to place img which can be dragged , scaled and rotated
        const OverlayClass = createOverlayClass(map!.api, {
            setMarkerA,
            setMarkerB,
            opacity: opacity,
            planDraggable: planDraggable,
        })

        const Overlay = new OverlayClass(bounds, imgSrc);
        Overlay.setMap(map.instance);
        setOverlay(Overlay)
    }

    const resetMarkerToCenter = useCallback(() => {
        console.log('resetting marker to center', selectedMarkerInstance.current)
        if (selectedMarkerInstance.current) {
            const center = map?.instance.getCenter()
            selectedMarkerInstance.current.setPosition(center)
        }
    }, [map?.instance])

    const renderMapControls = useCallback((map: MAPSTATE) => {
        // remove any existing controls
        map.instance.controls.forEach((control) => {
            control.clear()
        })

        if (!showButtons || !mapDraggable) return;

        const toggleButton = document.createElement("button");
        toggleButton.innerHTML = '<span title="Change Opacity" class="material-symbols-outlined">opacity</span>';
        toggleButton.classList.add("custom-map-control-button");

        const resetBtn = document.createElement("button");
        resetBtn.innerHTML = '<span title="Reset to Center" class="material-symbols-outlined">lock_reset</span>';
        resetBtn.classList.add("custom-map-control-button");

        const rotateLeftBtn = document.createElement("button");
        rotateLeftBtn.innerHTML = '<span title="Rotate Left | Hold Shift for precise rotation" class="material-symbols-outlined">rotate_left</span>';
        rotateLeftBtn.classList.add("custom-map-control-button");

        const rotateRightBtn = document.createElement("button");
        rotateRightBtn.innerHTML = '<span title="Rotate Right | Hold Shift for precise rotation" class="material-symbols-outlined">rotate_right</span>';;
        rotateRightBtn.classList.add("custom-map-control-button");

        // reset button
        resetBtn.addEventListener("click", () => {
            overlay?.reset({
                width: xdim * 0.8,
                height: ydim * 0.8,
            });
            if (!planDraggable) {
                resetMarkerToCenter()
            }
        });

        // reset button on double click
        if (mapRotateable) {
            resetBtn.addEventListener("dblclick", () => {
                map.instance.setHeading(0);
                overlay?.reset({
                    width: xdim * 0.8,
                    height: ydim * 0.8,
                });
            });
        }

        // click and hold to rotate
        let rotateInterval: any;
        rotateLeftBtn.addEventListener("mousedown", (evt) => {
            // for the precision of rotation, use shift key
            rotateInterval = setInterval(() => {
                evt.shiftKey ? rotateMap(-0.1) : rotateMap(-1)
            }, 50)
        });
        rotateLeftBtn.addEventListener("mouseup", () => {
            clearInterval(rotateInterval)
        });
        rotateLeftBtn.addEventListener("mouseleave", () => {
            clearInterval(rotateInterval)
        });

        rotateRightBtn.addEventListener("mousedown", (evt) => {
            // for the precision of rotation, use shift key
            rotateInterval = setInterval(() => {
                evt.shiftKey ? rotateMap(0.1) : rotateMap(1)
            }, 50)
        });
        rotateRightBtn.addEventListener("mouseup", () => {
            clearInterval(rotateInterval)
        });

        rotateRightBtn.addEventListener("mouseleave", () => {
            clearInterval(rotateInterval)
        });

        toggleButton.addEventListener("click", () => {
            const val = overlay?.toggleOpacity();
            val && setOpacity(val);
        });

        map.instance.controls[google.maps.ControlPosition.TOP_RIGHT].push(resetBtn);
        map.instance.controls[google.maps.ControlPosition.TOP_RIGHT].push(toggleButton);

        if (mapRotateable) {
            map.instance.controls[google.maps.ControlPosition.LEFT_CENTER].push(rotateLeftBtn);
            map.instance.controls[google.maps.ControlPosition.RIGHT_CENTER].push(rotateRightBtn);
        }
    }, [mapDraggable, mapRotateable, overlay, planDraggable, resetMarkerToCenter, rotateMap])


    // if map changes, set the map options
    useEffect(() => {
        if (!map) return;
        // enable fractional zoom
        map.instance.setOptions({
            isFractionalZoomEnabled: true,
        });
        // set the map heading
        setTimeout(() => {
            map.instance.setHeading(_heading)
        }, 500)

        // pass the map instance to the mapFunctions to be used by the parent component
        mapFunctions && mapFunctions(map)
    }, [map])

    // if data marker changes, rerender the markers
    useEffect(() => {
        if (map) {
            // load the markers from the data markers array 
            const { selectedMarker } = loadDataMarkers(dataMarkers, selectedMarkerID, getMarkerData)!;
            // if a marker is selected, set the selectedMarkerInstance
            if (selectedMarker) {
                selectedMarkerInstance.current = selectedMarker;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataMarkers, map, selectedMarkerID])

    // if map changes, render the map controls
    useEffect(() => {
        if (map) {
            renderMapControls(map)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, overlay])

    // if imgSrc changes, update the overlay img
    useEffect(() => {
        if (map) {
            AddOverlay(map, imgSrc)
            if ((!planDraggable && !_draggable) && overlay?.bounds) {
                console.log('setting bounds', overlay.bounds);
                // map.instance.fitBounds(overlay.bounds)
            }
        }
    }, [imgSrc, planDraggable, mapDraggable, map])

    useEffect(() => {
        setMapDraggable(_draggable)
    }, [_draggable])

    // handles the updating the overlay when the markers are changed
    useEffect(() => {
        if (overlay && map) {
            let bounds = new map.api.LatLngBounds(new map.api.LatLng(markerA.lat, markerA.lng),
                new map.api.LatLng(markerB.lat, markerB.lng))
            overlay.updateBounds(bounds)
            boundCenter.current = bounds.getCenter().toJSON()
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
                    markerCenter: boundCenter.current,
                    heading: map.instance.getHeading() ?? 0
                })
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center, markerA, markerB, zoom])

    const MarkerA = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <span className={planDraggable ? `marker` : `marker hidden`}></span>

    return (
        <div style={{ height: '100%', margin: '2px', width: xdim }}>
            {
                (showAddressInput && map?.apiLoaded) && (
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                    }}>
                        <AutoCompleteBox map={map} updatePlace={updatePlace} />
                        {children}
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
                        const data = {
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
                            overlay?.updateBounds(bounds)
                        }
                    }}
                    options={{
                        controlSize: 20, mapId: "90f87356969d889c", heading: _heading, rotateControl: true, zoomControl: mapZoomable, mapTypeControl: true, fullscreenControl: fullscreenControl
                    }}
                    onChildMouseDown={(childKey, childProps, mouse) => {
                        if (planDraggable) {
                            setMapDraggable(false)
                        }
                        // console.log("Mouse Down",  childKey, childProps, mouse)
                    }}
                    onChildMouseUp={(childKey, childProps, mouse) => {
                        // console.log("Child Click UP", childKey, childProps, mouse)
                        if (planDraggable && _draggable) {
                            setMapDraggable(true)
                        }
                    }}
                    onChildClick={(childKey, childProps) => {
                        // console.log("Child click ", childKey, childProps)
                    }}
                    onChildMouseMove={(childKey, childProps, mouse) => {
                        // console.log("Child Mouse Move", childKey, mouse)
                        if (planDraggable) {
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
                        }
                    }}
                >
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