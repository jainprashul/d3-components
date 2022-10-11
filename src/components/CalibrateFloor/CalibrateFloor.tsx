import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { asset } from '../../assets'

export type Coordinates = {
    id: number | string,
    label?: string,
    coordinates: number[],
}

type Props = {
    floorPlan: string
    xdim?: number
    ydim?: number
    size?: 'small' | 'medium' | 'large'
    getCalibrationData: (data: Coordinates[]) => void
    calbrationData?: Coordinates[]
}


const CalibrateFloor = ({
    floorPlan,
    xdim = 300,
    ydim = 300,
    size = 'large',
    getCalibrationData,
    calbrationData = [
        { id: 'A', label: 'Marker A', coordinates: [xdim / 3 , ydim/ 2] },
        { id: 'B', label: 'Marker B', coordinates: [xdim * 2 / 3, ydim / 2] },
    ]
}: Props) => {
    const canvas = React.useRef(null);

    let h = {
        small: 23,
        medium: 30,
        large: 40,
    }
    let dx = {
        small: 7.5,
        medium: 9.5,
        large: 12.4,
    }

    let dy = {
        small: 21,
        medium: 27,
        large: 36,
    }

    // on calibration Data change
    useEffect(() => {
        const svg = d3.select(canvas.current);
        addMarkers(svg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calbrationData])

    const addMarkers = (svg: d3.Selection<any, any, any, any>) => {

        if (svg.select('#A').empty()) {
            let markerA = svg.append('svg:image')
                .attr('class', 'pointer')
                .attr('data-id', calbrationData[0].id)
                .attr('data-label', calbrationData[0].label || calbrationData[0].id)
                .attr('xlink:href', asset.markerA)
                .attr('height', h[size])
                .attr('x', calbrationData[0].coordinates[0])
                .attr('y', calbrationData[0].coordinates[1])
                .attr('id', calbrationData[0].id)
                .style('cursor', 'pointer')
                .style('transform', `translate(-${dx[size]}px, -${dy[size]}px)`)

            updateDrag(markerA, svg);

        }


        // add Marker B
        if (svg.select('#B').empty()) {
            let markerB = svg.append('svg:image')
                .attr('class', 'pointer')
                .attr('data-id', calbrationData[1].id)
                .attr('data-label', calbrationData[1].label || calbrationData[1].id)
                .attr('xlink:href', asset.markerB)
                .attr('height', h[size])
                .attr('x', calbrationData[1].coordinates[0])
                .attr('y', calbrationData[1].coordinates[1])
                .attr('id', calbrationData[1].id)
                .style('cursor', 'pointer')
                .style('transform', `translate(-${dx[size]}px, -${dy[size]}px)`)
            updateDrag(markerB, svg);
        }

    }

    function updateDrag(ptr: d3.Selection<any, any, any, any>, svg: d3.Selection<any, any, any, any>) {
        ptr.call(
            d3.drag<any, any>()
                .on('start', (evt) => {
                    // console.log('start')
                    ptr.raise().classed('active', true);
                })
                .on('drag', (evt) => {
                    // console.log('drag')
                    let mouse = d3.pointer(evt, canvas.current);
                    ptr.attr('x', mouse[0] )
                        .attr('y', mouse[1] )
                })
                .on('end', (evt) => {
                    ptr.classed('active', false);
                    // let mouse = d3.pointer(evt, canvas.current);
                    // console.log('end', mouse)
                    collectCoordinates(svg)
                })
        )
    }

    function collectCoordinates(svg: d3.Selection<any, any, any, any>) {
        // get coordinates of markers
        let data: Coordinates[] = []
        svg.selectAll('.pointer').each(function (d, i) {
            let x = d3.select(this).attr('x')
            let y = d3.select(this).attr('y')
            let id = d3.select(this).attr('data-id')
            let label = d3.select(this).attr('data-label')
            data.push({
                id: id,
                label: label,
                coordinates: [Number(x), Number(y)]
            })
        })

        data.sort((a, b) => (a.id > b.id) ? 1 : -1)
        getCalibrationData(data)
    }

    return (
        <div style={{
            width: xdim,
            height: ydim,
            margin: '2px',
            border: '1px solid black',
        }}>
            <svg ref={canvas}
                width='100%'
                height='100%'
                viewBox={`0 0 ${xdim} ${ydim}`}
                preserveAspectRatio='xMinYMin'
                style={{
                    backgroundImage: `url(${floorPlan})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'round',
                }}></svg>
        </div>
    )
}

export default CalibrateFloor