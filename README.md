# d3-components

Contains 3 Components with D3 & React Google Maps 


To Install 

```
npm i @jainprashul/d3-components
```

To Use

- CalibrateMap Component

```js
import { CalibrateMap } from '@jainprashul/d3-components';

const App = () => {
    return (
        <CalibrateMap
          xdim={300} ydim={300}
          apiKey={KEY}
          center={{
            lat: lat,
            lng: lng
          }}

          getMapData={(markers) => {
            console.log(markers)
            setMapData(markers)
          }} />
    )
}

```

- Calibrate Floor Plan

```js
import { CalibrateFloor } from '@jainprashul/d3-components';

const App = () => {
    return (
        <CalibrateFloor
          floorPlan={`./floorplan.png`}
          getCalibrationData={(data) => console.log(data)}
          xdim={w} ydim={h} size='medium'
        />
    )
}

```

- View Plan 

```js
import { ViewPlan } from '@jainprashul/d3-components';

const App = () => {
    return (
    <ViewPlan 
      data={[
        {
          id: 1,
          label: 'A label',
          coordinates: [100, 100],
        },
        {
          id: 2,
          label: 'Another label',
          coordinates: [200, 200],
        },
        {
          id: 3,
          label: 'Yet another label',
          coordinates: [150, 280],
        },
      ]}
      floorPlan='./imgs/template-floor-plan.png'
      marker='./imgs/pointer-green.svg'
      xdim={500}
      ydim={500}
      />
    )
}

```

- Google Maps

```js
import { GoogleMaps } from '@jainprashul/d3-components';

const App = () => {
    return (
    <GoogleMaps
      apiKey={KEY}
      center={{
        lat: lat,
        lng: lng
      }}
      markers={markers}
      />
    )
}

```