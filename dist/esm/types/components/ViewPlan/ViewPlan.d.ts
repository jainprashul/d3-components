/// <reference types="react" />
import './viewPlan.css';
export declare type Coordinates = {
    id: number | string;
    label?: string;
    coordinates: number[];
};
declare type Props = {
    floorPlan: string;
    marker?: string;
    xdim?: number;
    ydim?: number;
    size?: 'small' | 'medium' | 'large';
    data: Coordinates[];
};
declare const ViewPlan: ({ floorPlan, marker, xdim, ydim, size, data }: Props) => JSX.Element;
export default ViewPlan;
