import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { asset } from '../../assets'

export type Location = {
    lat: number,
    lng: number
}

type Props = {
    center?: Location
    zoom?: number
    getCurrentLocation: (markers: Location) => void
    apiKey: string
    height?: number
    width?: number
    showAddressInput?: boolean
    showCurrentLocation?: boolean
}

const GoogleMap = ({
    center : _center,
    zoom = 11,
    getCurrentLocation,
    apiKey,
    height = 400,
    width = 400,
    showAddressInput = true,
    showCurrentLocation = true
}: Props) => {

    useEffect(() => {
        fetchCurrentLocation();
    }, [])

    useEffect(() => {
        if(map && _center?.lat !== center?.lat && _center?.lng !== center?.lng){
            console.log('center changed', center , _center)
            setCenter(_center)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_center])

    const [currentLocation, setCurrentLocation] = React.useState<null | Location>(null);
    const [center , setCenter] = React.useState<undefined | Location>(_center);
    const [map, setMap] = React.useState<any>(null)


    const [mapDraggable, setMapDraggable] = React.useState(true);

    useEffect(() => {
        if(center && map){
        getCurrentLocation(center)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center])

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

    const fetchCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                setCurrentLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })

            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const CurrentLocation = ({ lat, lng }: {
        lat: number,
        lng: number
    }) => <img src={asset.currentLocation} alt="Current Location" />

    return (
        <div className="gmap" style={{
            height: `${height}px`,
            width: `${width}px`,
            margin: '2px',
        }}>
            {
                (showAddressInput && map) && (
                    <AutoCompleteBox map={map} updatePlace={updatePlace} />
                )
            }
            <div style={{
                height: showAddressInput ? height - 34 : height,
                width: `${width}px`,
                border: '1px solid #ccc',
            }}>
                {
                    currentLocation && (<div style={{ height: '100%', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: apiKey,
                                libraries: ['places']
                            }}
                            draggable={mapDraggable}
                            center={center || currentLocation}
                            zoom={zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps: mapAPI, ref }) => {
                                // console.log(map, mapAPI, ref)
                                setMap({
                                    apiLoaded: true,
                                    instance: map,
                                    api: mapAPI,
                                    ref
                                })
                            }}
                            onChange={({ center, zoom, bounds, marginBounds }) => {
                                // console.log(center, zoom, bounds, marginBounds)
                                setCenter(center)
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
                                // console.log("Child Mouse Move", childKey, childProps, mouse)
                            }}
                        >
                            {showCurrentLocation && <CurrentLocation lat={currentLocation.lat} lng={currentLocation.lng} />}
                        </GoogleMapReact>

                    </div>)

                }



            </div>
        </div>
    )
}

export default GoogleMap


type AutocompleteProps = {
    updatePlace: (place: any) => void
    map: any
}

const AutoCompleteBox = (props: AutocompleteProps) => {
    const input = useRef<HTMLInputElement>(null)
    const [address, setAddress] = useState('')

    useEffect(() => {
        const autoComplete = new props.map.api.places.Autocomplete(input.current as HTMLInputElement, {
            types: ['address'],
        })
        autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace()
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