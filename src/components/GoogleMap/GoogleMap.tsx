import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import AutoCompleteBox from '../shared/AutoCompleteBox'
import { GmapApi } from '../../types/GmapApi'
import { MarkerData, useMap } from '../shared/useMap'

export type Location = {
    lat: number,
    lng: number
}

type MapData = {
    center: Location
    zoom: number
    heading?: number
    currentLocation?: Location
    markerLocation?: Location
}

type Props = {
    center?: Location
    zoom?: number
    heading?: number
    getMapData: (data: MapData) => void
    getMarkerData: (markers: MarkerData) => void
    apiKey: string
    height?: number
    width?: number
    showAddressInput?: boolean
    mapDraggable?: boolean
    mapFunctions?: (map: GmapApi) => void
    markers?: MarkerData[],
    markerDragable?: boolean
}

const GoogleMap = ({
    center: _center,
    zoom: _zoom = 11,
    getMapData,
    getMarkerData,
    apiKey,
    height = 400,
    width = 400,
    mapDraggable: _mapDrag = true,
    showAddressInput = true,
    markerDragable = true,
    markers = [],
}: Props) => {

    useEffect(() => {
        if (map && _center?.lat !== center?.lat && _center?.lng !== center?.lng) {
            console.log('center changed', center, _center)
            setCenter(_center)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_center])


    const { map, setMap, currentLocation, zoom, setZoom,
        mapDraggable, setMapDraggable, updatePlace, loadDataMarkers,
        center, setCenter } = useMap(_center, _zoom, _mapDrag)

    useEffect(() => {
        if (!map) return
        getMapData({
            center: center!,
            zoom,
            currentLocation: currentLocation!,
            heading: map.instance.getHeading(),
        })
    }, [center, map , currentLocation, zoom])

    // load markers
    useEffect(() => {
        if (!map) return
        loadDataMarkers(markers, undefined, getMarkerData, markerDragable)
    }, [map, markers])

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
                                libraries: ['places'],
                            }}
                            draggable={mapDraggable}
                            center={center || currentLocation}
                            zoom={zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps: mapAPI, ref }) => {
                                // console.log(map, mapAPI, ref)
                                setMap({
                                    apiLoaded: true,
                                    instance: map as google.maps.Map,
                                    api: mapAPI as GmapApi,
                                    ref: ref as HTMLElement
                                })
                            }}
                            onChange={({ center, zoom, bounds, marginBounds }) => {
                                // console.log(center, zoom, bounds, marginBounds)
                                setCenter(center)
                                setZoom(zoom)
                            }}
                            options={{ mapTypeControl: true, controlSize: 20, clickableIcons: true }}
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
                        </GoogleMapReact>
                    </div>)
                }
            </div>
        </div>
    )
}

export default GoogleMap
