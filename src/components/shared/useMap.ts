import { GmapApi } from "../../types/GmapApi";
import React, {useEffect} from 'react'

type Location = {
    lat: number,
    lng: number
}

export const useMap = (Center? : Location, Zoom = 10 ) => {
    const [map, setMap] = React.useState<{
        apiLoaded: boolean,
        instance: google.maps.Map
        api: GmapApi
        ref: HTMLElement | null
    } | null>(null)

    const [zoom, setZoom] = React.useState<number>(Zoom)

    const [center, setCenter] = React.useState<undefined | Location>(Center);
    
    const [mapDraggable, setMapDraggable] = React.useState(true);
    const [currentLocation, setCurrentLocation] = React.useState<null | Location>(null);

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
    // get the current location of the user and show it on the map
    useEffect(() => {
        fetchCurrentLocation();
        if (currentLocation && map) {
            new map!.api.Marker({
                position: currentLocation,
                map: map?.instance,
                title: 'Current Location',
                icon: {
                    url: "./imgs/current.svg" ,
                    scaledSize: new map!.api.Size(25, 25),
                    anchor: new map!.api.Point(12.5, 12.5)
                }
            })
        }
    }, [])

    React.useMemo(() => {
        if (currentLocation && map) {
            return new map!.api.Marker({
                position: currentLocation,
                map: map?.instance,
                title: 'Current Location',
                icon: {
                    url: "./imgs/current.svg" ,
                    scaledSize: new map!.api.Size(25, 25),
                    anchor: new map!.api.Point(12.5, 12.5)
                }
            })
        }
        return null;
    }, [currentLocation, map])

    // update the map when the search location changes 
    const updatePlace = (place: google.maps.places.PlaceResult) => {
        console.log('place', place)
        if (place.geometry?.viewport) {
            map!.instance.fitBounds(place.geometry.viewport!);
        } else {
            map!.instance.setCenter(place.geometry!.location!);
            map!.instance.setZoom(17);
        }

        //ADD THE infoWindow to the map and display it with the marker position and the place name 
        const infoWindow = new map!.api.InfoWindow({
            content: place.icon ? `<img src="${place.icon}" width=17 alt="${place.name}" /> ${place.name}` : place.name,
            position: place.geometry!.location!,
            ariaLabel: place.name,
        });
        infoWindow.open(map!.instance);
    }
    
    const _generateAddress = (lat: number, lng: number) => {
        const geocoder = map && new map.api.Geocoder();
        return new Promise<string>((resolve, reject) => {
            let address = ''
            geocoder?.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === "OK") {
                    console.log(results)
                    if (results?.[0]) {
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

    function rotateMap(direction = 1, delta = 2) {
        let angle = map?.instance.getHeading() || 0
        angle = angle + (delta * direction)
        map?.instance.setHeading(angle);
    }

    return {
        map, setMap,
        center, setCenter,
        zoom, setZoom,
        mapDraggable, setMapDraggable, 
        currentLocation,
        fetchCurrentLocation,
        updatePlace,
        _generateAddress,
        searchAddress,
        rotateMap
    }
};