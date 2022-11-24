/// <reference types="react" />
/// <reference types="google.maps" />
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
};
declare const OverlayMap: ({ xdim, ydim, center, heading: _heading, setCenter, markerA: _markerA, markerB: _markerB, zoom: _zoom, imgSrc, getMapData, size, showAddressInput, mapDraggable: _draggable, markerDraggable, mapZoomable, dataMarkers, selectedMarkerID, apiKey }: Props) => JSX.Element;

declare const imageDimensions: (file: File) => Promise<{
    width: number;
    height: number;
}>;
declare const transformCoordinates: (coordinates: Array<Array<number>>, currDim: number[], newDim: number[]) => number[][];

export { CalibrateFloor, CalibrateMap, Coordinates$1 as Coordinates, GoogleMap, Location$2 as Location, Location as LocationOverlay, MapData$1 as MapData, OverlayMap, ViewPlan, imageDimensions, transformCoordinates };
