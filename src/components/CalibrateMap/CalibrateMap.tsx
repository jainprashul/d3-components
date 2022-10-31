import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { asset } from '../../assets'
import AutoCompleteBox from '../shared/AutoCompleteBox'
import { GmapApi } from '../../types/GmapApi'

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
    setCenter,
    markerA: _markerA = defaultData.markerA,
    markerB: _markerB = defaultData.markerB,
    zoom: _zoom = defaultData.zoom,
    getMapData: getMarkers,
    size = 'medium',
    showAddressInput = true,
    apiKey
}: Props): JSX.Element => {

    let h = {
        small: 23,
        medium: 30,
        large: 40,
    }

    // const [center, setCenter] = React.useState<Location>(_center)
    const [zoom, setZoom] = React.useState<number>(_zoom)
    const [map, setMap] = React.useState<{
        apiLoaded: boolean,
        instance: google.maps.Map
        api: GmapApi
        ref: HTMLElement | null
    } | null>(null)


    const [markerA, setMarkerA] = React.useState<Location>(_markerA)

    const [markerB, setMarkerB] = React.useState<Location>(_markerB)

    useEffect(() => {
        if (map) {
            let addr = _generateAddress(_center.lat, _center.lng)
            addr.then((address) => {
                getMarkers({
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

    // On center prop change
    // useEffect(() => {
    //     if (map && center.lat !== center.lat && center.lng !== center.lng) {
    //         console.log('center changed', center, center)
    //         setCenter(center)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [center])


    const [mapDraggable, setMapDraggable] = React.useState(true);

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

    const _generateAddress = (lat: number, lng: number) => {
        const geocoder = map && new map.api.Geocoder();
        return new Promise<string>((resolve, reject) => {
            let address = ''
            geocoder?.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === "OK") {
                    console.log(results)
                    if (results?.[0]) {
                        address = results?.[0].formatted_address
                        resolve(address)
                    } else {
                        address = 'No results found'
                        resolve(address)
                    }
                } else {
                    address = 'Geocoder failed due to: ' + status
                    reject(address)
                }
            });
        })
    }

    const updatePlace = (place: google.maps.places.PlaceResult) => {
        if (place.geometry?.location) {
            let lat = place.geometry.location.lat()
            let lng = place.geometry.location.lng()
            setCenter({
                lat,
                lng
            })
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const searchAddress = (address: string) => {
        if (address.length < 2) {
            return
        }
        const geocoder = map && new map.api.Geocoder();
        geocoder?.geocode({ address }, (results, status) => {
            if (status === "OK") {
                console.log(results)
                if (results?.[0]) {
                    let lat = results[0].geometry.location.lat()
                    let lng = results[0].geometry.location.lng()
                    console.log(lat, lng)
                } else {
                    console.log('No results found')
                }
            } else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    }

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
                        // setMarkerA({
                        //     "lat": center.lat - (-0.00000227),
                        //     "lng": center.lng - (0.000131),
                        // })
                        // setMarkerB({
                        //     "lat": center.lat - (-0.00000708),
                        //     "lng": center.lng - (-0.00016),
                        // })
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
                    }}
                >
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