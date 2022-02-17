import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'

import React from 'react'
import { useEffect } from 'react'

import VectorMap, { Layer, Tooltip, Label } from 'devextreme-react/vector-map'

import { roomsData, buildingData, anchorGeneration } from './data.js'
// import { markers } from './dataGeneration.js';

import db from './Firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
import dataGeneration from './dataGeneration.js'

const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100]
}

const sizeGroups = [0, 8000, 10000, 50000]

export default function App() {
  const [devices, setDevices] = React.useState([])
  const [markers, setMarkers] = React.useState([{
    type: 'FeatureCollection',
    features: [
      {
        coordinates: [-28, -40],
        text: 'Device 1',
        value: 1,
      },
    ].map((data) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: data.coordinates,
      },
      properties: {
        text: data.text,
        value: data.value,
        tooltip: `<b>${data.text}</b>\n${data.value}K`,
      },
    })),
  }])

  useEffect(
    () =>
      onSnapshot(collection(db, 'devices'), snapshot => {
        setDevices(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      }),
    []
  )

  useEffect(
    () =>
      setMarkers([dataGeneration(devices)]),
    [devices]
  )

  return (
    <div className='App'>
      <VectorMap
        id='vector-map'
        maxZoomFactor={4}
        projection={projection}
        style={{ height: '600px', width: '800px' }}
      >
        <Layer
          dataSource={buildingData}
          hoverEnabled={false}
          name='building'
        ></Layer>
        <Layer
          dataSource={roomsData}
          name='rooms'
          borderWidth={1}
          color='transparent'
        >
          <Label enabled={true} dataField='name'></Label>
        </Layer>
        <Layer
          dataSource={anchorGeneration()}
          name='bubbles'
          elementType='bubble'
          dataField='value'
          minSize={20}
          maxSize={40}
          sizeGroups={sizeGroups}
          opacity='0.8'
          color={'#812904'}
        >
          <Label enabled={true} dataField='text'></Label>
        </Layer>
        <Layer
          dataSource={markers}
          name='bubbles'
          elementType='bubble'
          dataField='value'

          minSize={20}
          maxSize={40}
          sizeGroups={sizeGroups}
          opacity='0.8'
        >
          <Label enabled={true} dataField='text'></Label>
        </Layer>
        <Tooltip enabled={true} customizeTooltip={customizeTooltip}></Tooltip>
      </VectorMap>
    </div>
  )
}

function customizeTooltip(arg) {
  if (arg.layer.name === 'rooms') {
    return { text: `Count: ${arg.attribute('count')}` }
  }
  return null
}
