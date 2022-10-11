/// <reference types="react" />
declare type Location = {
    lat: number;
    lng: number;
    address?: string;
};
export declare type MapData = {
    center: Location;
    zoom: number;
    markerA: Location;
    markerB: Location;
};
declare type Props = {
    xdim?: number;
    ydim?: number;
    center?: Location;
    setCenter: (center: Location) => void;
    zoom?: number;
    getMapData: (data: MapData) => void;
    markerA?: Location;
    markerB?: Location;
    size?: 'small' | 'medium' | 'large';
    showAddressInput?: boolean;
    apiKey: string;
};
declare const CalibrateMap: ({ xdim, ydim, center, setCenter, markerA: _markerA, markerB: _markerB, zoom: _zoom, getMapData: getMarkers, size, showAddressInput, apiKey }: Props) => JSX.Element;
export default CalibrateMap;
