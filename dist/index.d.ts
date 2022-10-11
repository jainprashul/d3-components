/// <reference types="react" />
declare type Location$1 = {
    lat: number;
    lng: number;
    address?: string;
};
declare type MapData = {
    center: Location$1;
    zoom: number;
    markerA: Location$1;
    markerB: Location$1;
};
declare type Props$3 = {
    xdim?: number;
    ydim?: number;
    center?: Location$1;
    setCenter: (center: Location$1) => void;
    zoom?: number;
    getMapData: (data: MapData) => void;
    markerA?: Location$1;
    markerB?: Location$1;
    size?: 'small' | 'medium' | 'large';
    showAddressInput?: boolean;
    apiKey: string;
};
declare const CalibrateMap: ({ xdim, ydim, center, setCenter, markerA: _markerA, markerB: _markerB, zoom: _zoom, getMapData: getMarkers, size, showAddressInput, apiKey }: Props$3) => JSX.Element;

declare type Coordinates$1 = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props$2 = {
    floorPlan: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    getCalibrationData: (data: Coordinates$1[]) => void;
    calbrationData?: Coordinates$1[];
};
declare const CalibrateFloor: ({ floorPlan, xdim, ydim, size, getCalibrationData, calbrationData }: Props$2) => JSX.Element;

declare type Coordinates = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props$1 = {
    floorPlan: string;
    marker?: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    data: Coordinates[];
};
declare const ViewPlan: ({ floorPlan, marker, xdim, ydim, size, data }: Props$1) => JSX.Element;

declare type Location = {
    lat: number;
    lng: number;
};
declare type Props = {
    center?: Location;
    zoom?: number;
    getCurrentLocation: (markers: Location) => void;
    apiKey: string;
    height?: number;
    width?: number;
    showAddressInput?: boolean;
    showCurrentLocation?: boolean;
};
declare const GoogleMap: ({ center: _center, zoom, getCurrentLocation, apiKey, height, width, showAddressInput, showCurrentLocation }: Props) => JSX.Element;

declare const imageDimensions: (file: File) => Promise<{
    width: number;
    height: number;
}>;
declare const transformCoordinates: (coordinates: Array<Array<number>>, currDim: number[], newDim: number[]) => number[][];

export { CalibrateFloor, CalibrateMap, Coordinates$1 as Coordinates, GoogleMap, Location, MapData, ViewPlan, imageDimensions, transformCoordinates };
