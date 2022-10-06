import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'

type Location = {
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

type Props = {
    xdim?: number
    ydim?: number
    center?: Location,
    zoom?: number,
    getMapData: (data: MapData) => void,
    markerA?: Location,
    markerB?: Location,
    size?: 'small' | 'medium' | 'large'
    showAddress?: boolean
    showAddressInput?: boolean
    showAutoComplete?: boolean
    apiKey : string
}


const CalibrateMap = ({
    xdim = 300,
    ydim = 300,
    center: _center = {
        "lat": 41.73284437919054,
        "lng": -93.93040700837061
    },
    // markerA: _markerA = {
    //     "lat": 41.73285246071742,
    //     "lng": -93.93053629087787,
    // },
    // markerB: _markerB = {
    //     "lat": 41.73285246071742,
    //     "lng": -93.93024258899074,
    // },
    zoom: _zoom = 20,
    getMapData: getMarkers,
    size = 'medium',
    showAddressInput = true,
    apiKey
}: Props) => {

    let h = {
        small: 23,
        medium: 30,
        large: 40,
    }

    const [center, setCenter] = React.useState<Location>(_center)
    const [zoom, setZoom] = React.useState<number>(_zoom)
    const [map, setMap] = React.useState<any>(null)


    const [markerA, setMarkerA] = React.useState<Location>({
        "lat": center.lat - (-0.00000227),
        "lng": center.lng - (0.000131),
    })

    const [markerB, setMarkerB] = React.useState<Location>({
        "lat": center.lat - (-0.00000708),
        "lng": center.lng - (-0.00016),
    })

    useEffect(() => {
        if (map) {
            let addr = _generateAddress(center.lat, center.lng)
            addr.then((address) => {
                getMarkers({
                    center: {
                        lat: center.lat,
                        lng: center.lng,
                        address
                    },
                    zoom,
                    markerA,
                    markerB
                })
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center, markerA, markerB, zoom])

    // On center prop change
    useEffect(() => {
        setCenter(_center)
    }, [_center])


    const [mapDraggable, setMapDraggable] = React.useState(true);

    const MarkerA = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <img src="./imgs/markerA.svg" style={{
        // transform: `translate(-${dx[size]}px, -${dy[size]}px)`,
        transform: `translate(-${48}%, -${90}%)`,
    }} height={h[size]} alt="Marker A" />

    const MarkerB = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <img src="./imgs/markerB.svg" style={{
        transform: `translate(-${48}%, -${90}%)`,
    }} height={h[size]} alt="Marker B" />

    const _generateAddress = (lat: number, lng: number) => {
        const geocoder = new map.api.Geocoder();
        return new Promise<string>((resolve, reject) => {
            let address = ''
            geocoder.geocode({ location: { lat, lng } }, (results: any, status: any) => {
                if (status === "OK") {
                    console.log(results)
                    if (results[0]) {
                        address = results[0].formatted_address
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

    const updatePlace = (place: any) => {
        if (place.geometry) {
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
        if(address.length < 2){
            return
        }
        const geocoder = new map.api.Geocoder();
        geocoder.geocode({ address }, (results: any, status: any) => {
            if (status === "OK") {
                console.log(results)
                if (results[0]) {
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

    return (
        <div style={{ height: '100%', margin: '2px' }}>
            {
                (showAddressInput && map) && (
                    <AutoCompleteBox map={map} updatePlace={updatePlace} />
                )
            }
            <div style={{
                width: xdim,
                height: showAddressInput ? ydim - 34 : ydim,
                border: '1px solid black',

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
                        setMap({
                            apiLoaded: true,
                            instance: map,
                            api: mapAPI,
                            ref
                        })
                    }}
                    onChange={({ center, zoom, bounds, marginBounds }) => {
                        console.log(center, zoom, bounds, marginBounds)
                        setCenter(center)
                        setMarkerA({
                            "lat": center.lat - (-0.00000227),
                            "lng": center.lng - (0.000131),
                        })
                        setMarkerB({
                            "lat": center.lat - (-0.00000708),
                            "lng": center.lng - (-0.00016),
                        })
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


type AutocompleteProps = {
    updatePlace: (place: any) => void
    map : any
}

const AutoCompleteBox = (props : AutocompleteProps) => {
    const input = useRef<HTMLInputElement>(null)
    const [address, setAddress] = useState('')
    
    useEffect(() => {
        const autoComplete = new props.map.api.places.Autocomplete(input.current as HTMLInputElement, {
            types: ['address'],
        })
        autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace()
            console.log(place)
            props.updatePlace(place)
        })

        autoComplete.bindTo("bounds", props.map.instance);

        console.log(props.map.api.places)
        return () => {
            autoComplete.unbindAll()
            props.map.api.event.clearInstanceListeners(autoComplete)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <input type="text" id="pac-input" className="controls" style={{
            width: '100%',
            height: '30px',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom: '4px',
        }} placeholder="Enter a location" 
        value={address}
        ref={input}
        onChange={(e) => setAddress(e.target.value)}
        />
    )
}

export default CalibrateMap