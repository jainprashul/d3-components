/// <reference types="react" />
/// <reference types="google.maps" />
import React from 'react';

declare type Location$3 = {
    lat: number;
    lng: number;
    address?: string;
};
declare type MapData$1 = {
    center: Location$3;
    zoom: number;
    markerA: Location$3;
    markerB: Location$3;
    heading?: number;
};
declare type Props$4 = {
    xdim?: number;
    ydim?: number;
    center?: Location$3;
    setCenter: (center: Location$3) => void;
    zoom?: number;
    heading?: number;
    getMapData: (data: MapData$1) => void;
    markerA?: Location$3;
    markerB?: Location$3;
    size?: 'small' | 'medium' | 'large';
    showAddressInput?: boolean;
    apiKey: string;
};
declare const CalibrateMap: ({ xdim, ydim, center: _center, heading, setCenter, markerA: _markerA, markerB: _markerB, zoom: _zoom, getMapData, size, showAddressInput, apiKey }: Props$4) => JSX.Element;

declare type Coordinates$1 = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props$3 = {
    floorPlan: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    getCalibrationData: (data: Coordinates$1[]) => void;
    calbrationData?: Coordinates$1[];
};
declare const CalibrateFloor: ({ floorPlan, xdim, ydim, size, getCalibrationData, calbrationData }: Props$3) => JSX.Element;

declare type Coordinates = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props$2 = {
    floorPlan: string;
    marker?: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    data: Coordinates[];
};
declare const ViewPlan: ({ floorPlan, marker, xdim, ydim, size, data }: Props$2) => JSX.Element;

declare type Location$2 = {
    lat: number;
    lng: number;
};
declare type Props$1 = {
    center?: Location$2;
    zoom?: number;
    getCurrentLocation: (markers: Location$2) => void;
    apiKey: string;
    height?: number;
    width?: number;
    showAddressInput?: boolean;
    showCurrentLocation?: boolean;
};
declare const GoogleMap: ({ center: _center, zoom, getCurrentLocation, apiKey, height, width, showAddressInput, showCurrentLocation }: Props$1) => JSX.Element;

interface GmapApi {
    Animation: google.maps.Animation;
    BicyclingLayer: google.maps.BicyclingLayer;
    Circle: google.maps.Circle;
    ControlPosition: google.maps.ControlPosition;
    Data: google.maps.Data;
    DirectionsRenderer: google.maps.DirectionsRenderer;
    DirectionsService: google.maps.DirectionsService;
    DirectionsStatus: google.maps.DirectionsStatus;
    DirectionsTravelMode: google.maps.DirectionsTravelMode;
    DirectionsUnitSystem: google.maps.DirectionsUnitSystem;
    DistanceMatrixElementStatus: google.maps.DistanceMatrixElementStatus;
    DistanceMatrixService: google.maps.DistanceMatrixService;
    DistanceMatrixStatus: google.maps.DistanceMatrixStatus;
    ElevationService: google.maps.ElevationService;
    ElevationStatus: google.maps.ElevationStatus;
    FusionTablesLayer: any;
    Geocoder: new () => google.maps.Geocoder;
    GeocoderLocationType: google.maps.GeocoderLocationType;
    GeocoderStatus: google.maps.GeocoderStatus;
    GroundOverlay: google.maps.GroundOverlay;
    ImageMapType: google.maps.ImageMapType;
    InfoWindow: new (opts?: google.maps.InfoWindowOptions | null) => google.maps.InfoWindow;
    KmlLayer: google.maps.KmlLayer;
    KmlLayerStatus: google.maps.KmlLayerStatus;
    LatLng: new (latOrLatLngOrLatLngLiteral: number | google.maps.LatLngLiteral | google.maps.LatLng, lngOrNoClampNoWrap?: number | boolean | null, noClampNoWrap?: boolean) => google.maps.LatLng;
    LatLngAltitude: google.maps.LatLngAltitude;
    LatLngBounds: new (swOrLatLngBounds?: google.maps.LatLng | null | google.maps.LatLngLiteral | google.maps.LatLngBounds, ne?: google.maps.LatLng | null | google.maps.LatLngLiteral) => google.maps.LatLngBounds;
    MVCArray: google.maps.MVCArray;
    MVCObject: google.maps.MVCObject;
    Map: google.maps.Map;
    MapTypeControlStyle: google.maps.MapTypeControlStyle;
    MapTypeId: google.maps.MapTypeId;
    MapTypeRegistry: google.maps.MapTypeRegistry;
    MapNetworkError: (a: any, b: any, c: any) => void;
    MapsNetworkErrorEndpoint: google.maps.MapsNetworkErrorEndpoint;
    MapsRequestError: google.maps.MapsRequestError;
    MapsServerError: google.maps.MapsServerError;
    Marker: new (opts?: google.maps.MarkerOptions | null) => google.maps.Marker;
    MarkerImage: MarkerImage;
    MaxZoomService: google.maps.MaxZoomService;
    MaxZoomStatus: google.maps.MaxZoomStatus;
    NavigationControlStyle: NavigationControlStyle;
    OverlayView: new () => google.maps.OverlayView;
    Point: new (x: number, y: number) => google.maps.Point;
    Polygon: google.maps.Polygon;
    Polyline: google.maps.Polyline;
    Rectangle: google.maps.Rectangle;
    RenderingType: google.maps.RenderingType;
    SaveWidget: (container: Element, opts?: SaveWidgetOptions) => void;
    ScaleControlStyle: google.maps.ScaleControlStyle;
    Size: new (width: number, height: number, widthUnit?: string, heightUnit?: string) => google.maps.Size;
    StreetViewCoverageLayer: google.maps.StreetViewCoverageLayer;
    StreetViewPanorama: google.maps.StreetViewPanorama;
    StreetViewPreference: google.maps.StreetViewPreference;
    StreetViewService: google.maps.StreetViewService;
    StreetViewStatus: google.maps.StreetViewStatus;
    StreetViewSource: google.maps.StreetViewSource;
    StrokePosition: google.maps.StrokePosition;
    StyledMapType: google.maps.StyledMapType;
    SymbolPath: google.maps.SymbolPath;
    TrafficLayer: google.maps.TrafficLayer;
    TrafficModel: google.maps.TrafficModel;
    TransitLayer: google.maps.TransitLayer;
    TransitMode: google.maps.TransitMode;
    TransitRoutePreference: google.maps.TransitRoutePreference;
    TravelMode: google.maps.TravelMode;
    UnitSystem: google.maps.UnitSystem;
    VehicleType: google.maps.VehicleType;
    ZoomControlStyle: ZoomControlStyle;
    event: any;
    places: {
        Autocomplete: new (inputField: HTMLInputElement, opts?: google.maps.places.AutocompleteOptions | null) => google.maps.places.Autocomplete;
        AutocompleteService: new () => google.maps.places.AutocompleteService;
        AutocompleteSessionToken: new () => google.maps.places.AutocompleteSessionToken;
        BusinessStatus: google.maps.places.BusinessStatus;
        PlacesService: new (attrContainer: HTMLDivElement | google.maps.Map) => google.maps.places.PlacesService;
        PlacesServiceStatus: google.maps.places.PlacesServiceStatus;
        RankBy: google.maps.places.RankBy;
        SearchBox: new (inputField: HTMLInputElement, opts?: google.maps.places.SearchBoxOptions | null) => google.maps.places.SearchBox;
        SearchBoxOptions: google.maps.places.SearchBoxOptions;
    };
    version: string;
}
interface NavigationControlStyle {
    DEFAULT: number;
    SMALL: number;
    ANDROID: number;
    ZOOM_PAN: number;
    OA: number;
    Gu: number;
}
interface ZoomControlStyle {
    DEFAULT: number;
    SMALL: number;
    LARGE: number;
    Gu: number;
}
interface SaveWidgetOptions {
    placeId: string;
    query: string;
    position: google.maps.ControlPosition;
    attribution: SaveWidgetAttribution;
}
interface SaveWidgetAttribution {
    source: string;
    webUrl: string;
}
interface MarkerImage {
    url: string;
    size?: google.maps.Size;
    origin?: google.maps.Point;
    anchor?: google.maps.Point;
    scaledSize?: google.maps.Size;
}

declare type Location$1 = {
    lat: number;
    lng: number;
};
declare type MarkerData = {
    id: string | number;
    location: Location$1;
    title: string;
    icon?: string;
};
declare type MAPSTATE = {
    apiLoaded: boolean;
    instance: google.maps.Map;
    api: GmapApi;
    ref: HTMLElement | null;
};
declare const useMap: (Center?: Location$1, Zoom?: number, Heading?: number, mapDrag?: boolean) => {
    map: MAPSTATE | null;
    setMap: React.Dispatch<React.SetStateAction<MAPSTATE | null>>;
    center: Location$1 | undefined;
    setCenter: React.Dispatch<React.SetStateAction<Location$1 | undefined>>;
    zoom: number;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
    mapDraggable: boolean;
    setMapDraggable: React.Dispatch<React.SetStateAction<boolean>>;
    currentLocation: Location$1 | null;
    fetchCurrentLocation: () => void;
    updatePlace: (place: google.maps.places.PlaceResult) => void;
    _generateAddress: (lat: number, lng: number) => Promise<string>;
    searchAddress: (address: string) => void;
    rotateMap: (direction?: number, delta?: number) => void;
    loadDataMarkers: (data: MarkerData[], selectedMarkerID?: string | number, callback?: (data: MarkerData) => void) => google.maps.Marker[] | null;
};

declare type Location = {
    lat: number;
    lng: number;
    address?: string;
    x?: number;
    y?: number;
};
declare type MapData = {
    center: Location;
    zoom: number;
    markerA: Location;
    markerB: Location;
    heading?: number;
};
declare type Props = {
    xdim?: number;
    ydim?: number;
    center?: Location;
    setCenter: (center: Location) => void;
    zoom?: number;
    heading?: number;
    getMapData: (data: MapData) => void;
    imgSrc?: string;
    markerA?: Location;
    markerB?: Location;
    size?: 'small' | 'medium' | 'large';
    showAddressInput?: boolean;
    apiKey: string;
    mapDraggable?: boolean;
    markerDraggable?: boolean;
    mapZoomable?: boolean;
    dataMarkers?: MarkerData[];
    selectedMarkerID?: string | number;
    getMarkerData?: (data: MarkerData) => void;
};
declare const OverlayMap: ({ xdim, ydim, center, heading: _heading, setCenter, markerA: _markerA, markerB: _markerB, zoom: _zoom, imgSrc, getMapData, size, showAddressInput, mapDraggable: _draggable, markerDraggable, mapZoomable, dataMarkers, selectedMarkerID, getMarkerData, apiKey }: Props) => JSX.Element;

declare const imageDimensions: (file: File) => Promise<{
    width: number;
    height: number;
}>;
declare const transformCoordinates: (coordinates: Array<Array<number>>, currDim: number[], newDim: number[]) => number[][];

export { CalibrateFloor, CalibrateMap, Coordinates$1 as Coordinates, GoogleMap, Location$2 as Location, Location as LocationOverlay, MAPSTATE, MapData$1 as MapData, MarkerData, OverlayMap, ViewPlan, imageDimensions, transformCoordinates, useMap };
