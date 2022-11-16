import React, { useEffect } from 'react'
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
}

export type MapData = {
    center: Location,
    zoom: number,
    markerA: Location,
    markerB: Location,
    heading? : number
}

let defaultData = {
        center: {
            "lat": 41.73284437919054,
            "lng": -93.93040700837061
        },
        zoom: 20,
        markerA: {
            "lat": 41.73284437919054 - (-0.00000227),
            "lng": -93.93040700837061 - (0.000131),
        },
        markerB: {
            "lat": 41.73284437919054 - (-0.00000708),
            "lng": -93.93040700837061 - (-0.00016),
        },
        xdim: 300,
        ydim: 300
}

type Props = {
    xdim?: number
    ydim?: number
    center?: Location,
    setCenter: (center: Location) => void,
    zoom?: number,
    heading ?: number,
    getMapData: (data: MapData) => void,
    markerA?: Location,
    markerB?: Location,
    size?: 'small' | 'medium' | 'large'
    showAddressInput?: boolean
    apiKey: string
}

const CalibrateMap = ({
    xdim = defaultData.xdim,
    ydim = defaultData.ydim,
    center: _center = defaultData.center,
    heading = 0,
    setCenter,
    markerA: _markerA = defaultData.markerA,
    markerB: _markerB = defaultData.markerB,
    zoom: _zoom = defaultData.zoom,
    getMapData,
    size = 'medium',
    showAddressInput = true,
    apiKey
}: Props) => {

    let h = {
        small: 23,
        medium: 30,
        large: 40,
    }

    const { map , setMap,
        zoom, setZoom,
        mapDraggable , setMapDraggable , updatePlace, _generateAddress} = useMap(_center, _zoom, heading)

    const [markerA, setMarkerA] = React.useState<Location>(_markerA)
    const [markerB, setMarkerB] = React.useState<Location>(_markerB)
    
    // send the map data to the parent component when map parameters change
    useEffect(() => {
        if (map) {
            let addr = _generateAddress(_center.lat, _center.lng)
            addr.then((address) => {
                getMapData({
                    center: {
                        lat: _center.lat,
                        lng: _center.lng,
                        address
                    },
                    zoom,
                    markerA,
                    markerB
                })
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_center, markerA, markerB, zoom])

    const MarkerA = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <img src={asset.markerA} style={{
        // transform: `translate(-${dx[size]}px, -${dy[size]}px)`,
        transform: `translate(-${48}%, -${90}%)`,
    }} height={h[size]} alt="Marker A" />

    const MarkerB = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <img src={asset.markerB} style={{
        transform: `translate(-${48}%, -${90}%)`,
    }} height={h[size]} alt="Marker B" />



    function resetMarkers(){
        setMarkerA({
            lat: _center.lat - (-0.00000227),
            lng: _center.lng - (0.000131),
        })
        setMarkerB({
            lat: _center.lat - (-0.00000708),
            lng: _center.lng - (-0.00016),
        })
    }

    return (
        <div style={{ height: ydim, margin: '2px', width: xdim }}>
            {
                (showAddressInput && map?.apiLoaded) && (
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                    }}>
                        <AutoCompleteBox map={map} updatePlace={updatePlace} />
                        <div className="reset" style={{
                            backgroundColor: '#d6d6d6',
                            color: 'white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }} onClick={resetMarkers} >
                            <img src={asset.pin} alt="ResetPin" />
                        </div>
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
                    center={_center}
                    zoom={zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps: mapAPI, ref }) => {
                        console.log(map, mapAPI, ref)
                        setMap({
                            apiLoaded: true,
                            instance: map as google.maps.Map,
                            api: mapAPI as GmapApi,
                            ref: ref as HTMLElement
                        })
                    }}
                    onChange={({ center, zoom, bounds, marginBounds }) => {
                        console.log(center, zoom, bounds, marginBounds)
                        setCenter(center)
                        setZoom(zoom)
                    }}
                    options={{ mapTypeControl: true, controlSize: 20 }}
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
                    }}>

                    <MarkerA
                        key={0}
                        lat={markerA.lat}
                        lng={markerA.lng}
                    />
                    <MarkerB
                        key={1}
                        lat={markerB.lat}
                        lng={markerB.lng}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default CalibrateMap