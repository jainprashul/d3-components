import React, { useEffect } from 'react'
import * as d3 from 'd3'
import './viewPlan.css'

type Props = {
    floorPlan: string
    marker?: string
    xdim?: number
    ydim?: number
    size ?: 'small' | 'medium' | 'large'
    data:  {
        id: number | string,
        label?: string,
        coordinates: [number, number],
    }[]
}

const ViewPlan = ({
    floorPlan,
    marker = './imgs/pointer.svg',
    xdim = 300,
    ydim = 300,
    size = 'small',
    data
}: Props) => {
    const canvas = React.useRef(null);
    useEffect(() => {
        const svg = d3.select(canvas.current);
        addPointer(svg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let h = {
        small : 23,
        medium : 30,
        large : 40,
    }
    let dx = {
        small : 7.5,
        medium : 9.5,
        large : 12.4,
    }

    let dy = {
        small : 21,
        medium : 27,
        large : 36,
    }

    const addPointer = (svg: d3.Selection<null, unknown, null, undefined>) => {
        // let h = 23, dx = 7.5, dy = 21;
        data && data.forEach((d, i) => {
            let grp = svg.append('g')
                .attr('class', 'pointer')
                .attr('data-id', d.id)
            
            grp.append('svg:image')
            .attr('xlink:href', marker)
            .attr('height', h[size])
            .attr('x', d.coordinates[0] - dx[size])
            .attr('y', d.coordinates[1] - dy[size])
            .attr('id', d.id.toString())

            grp.append('text')
            .attr('x', d.coordinates[0] - dx[size])
            .attr('y', d.coordinates[1] - dy[size] - 5)
            .attr('id', d.id.toString())
            .attr('class', 'pointer-label')
            .text(d.label || d.id)
        })
    }


    return (
        <div style={{
            width: xdim,
            height: ydim,
        }}>
            <svg ref={canvas}
                width='100%'
                height='100%'
                viewBox={`0 0 ${xdim} ${ydim}`}
                preserveAspectRatio='xMinYMin'
                style={{
                    border: '1px solid black',
                    backgroundImage: `url(${floorPlan})`,
                    backgroundSize: 'contain',
                }}></svg>
        </div>
    )
}

export default ViewPlan