import { GmapApi } from "../../types/GmapApi";
import React, {useEffect} from 'react'

type Location = {
    lat: number,
    lng: number
}

export const useMap = (Center? : Location ) => {
    const [map, setMap] = React.useState<{
        apiLoaded: boolean,
        instance: google.maps.Map
        api: GmapApi
        ref: HTMLElement | null
    } | null>(null)

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
    

    return {
        map, setMap,
        center, setCenter,
        mapDraggable, setMapDraggable, 
        currentLocation,
        fetchCurrentLocation,
        updatePlace
    }
};