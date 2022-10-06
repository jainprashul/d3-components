/// <reference types="react" />
export declare type Coordinates = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props = {
    floorPlan: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    getCalibrationData: (data: Coordinates[]) => void;
};
declare const CalibrateFloor: ({ floorPlan, xdim, ydim, size, getCalibrationData }: Props) => JSX.Element;
export default CalibrateFloor;
