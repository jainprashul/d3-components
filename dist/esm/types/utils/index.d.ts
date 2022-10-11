export declare const imageDimensions: (file: File) => Promise<{
    width: number;
    height: number;
}>;
export declare const transformCoordinates: (coordinates: Array<Array<number>>, currDim: number[], newDim: number[]) => number[][];
