/// <reference types="react" />
declare type Location = {
    lat: number;
    lng: number;
    address?: string;
};
declare type MapData = {
    center: Location;
    zoom: number;
    markerA: Location;
    markerB: Location;
};
declare type Props$2 = {
    xdim?: number;
    ydim?: number;
    center?: Location;
    zoom?: number;
    getMapData: (data: MapData) => void;
    markerA?: Location;
    markerB?: Location;
    size?: 'small' | 'medium' | 'large';
    showAddress?: boolean;
    showAddressInput?: boolean;
    showAutoComplete?: boolean;
    apiKey: string;
};
declare const CalibrateMap: ({ xdim, ydim, center: _center, zoom: _zoom, getMapData: getMarkers, size, showAddressInput, apiKey }: Props$2) => JSX.Element;

declare type Coordinates = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props$1 = {
    floorPlan: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    getCalibrationData: (data: Coordinates[]) => void;
};
declare const CalibrateFloor: ({ floorPlan, xdim, ydim, size, getCalibrationData }: Props$1) => JSX.Element;

declare type Props = {
    floorPlan: string;
    marker?: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    data: {
        id: number | string;
        label?: string;
        coordinates: [number, number];
    }[];
};
declare const ViewPlan: ({ floorPlan, marker, xdim, ydim, size, data }: Props) => JSX.Element;

declare const imageDimensions: (file: File) => Promise<{
    width: number;
    height: number;
}>;

export { CalibrateFloor, CalibrateMap, Coordinates, MapData, ViewPlan, imageDimensions };
