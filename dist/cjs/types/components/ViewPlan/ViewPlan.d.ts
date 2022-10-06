/// <reference types="react" />
import './viewPlan.css';
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
export default ViewPlan;
