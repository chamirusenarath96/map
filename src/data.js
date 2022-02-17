export const buildingData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-40, 30],
          [-37, 30],
          [-37, -87],
          [13, -87],
          [13, -77],
          [16, -77],
          [16, -87],
          [157, -87],
          [157, -53],
          [95, -53],
          [95, -50],
          [157, -50],
          [157, 27],
          [88, 27],
          [88, -47],
          [85, -47],
          [85, 27],
          [16, 27],
          [16, -47],
          [13, -47],
          [13, 27],
          [-30, 27],
          [-30, 30],
          [160, 30],
          [160, -90],
          [-40, -90],
          [-40, 30]
        ], [
          [23, -50],
          [79, -50],
          [79, -53],
          [23, -53],



        ]],
      },
    },
  ],
};

export const roomsData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Room 1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-37, 30],
          [-30, 30],
          [-30, 27],
          [13, 27],
          [13, -87],
          [-37, -87],
        ]],
      },
    }, {
      type: 'Feature',
      properties: {
        name: 'Room 2',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [16, 27],
          [85, 27],
          [85, -50],
          [16, -50],
        ]],
      },
    }, {
      type: 'Feature',
      properties: {
        name: 'Room 3',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [88, 27],
          [157, 27],
          [157, -50],
          [88, -50],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Room 4',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [16, -53],
          [157, -53],
          [157, -87],
          [16, -87],
          
        ]],
      },
    },
  ],
};

const anchorMarkers = [
  {
    coordinates: [-8, 27],
    text: 'Anchor 1',
    value: 1,
  },
  {
    coordinates: [50.5, 27],
    text: 'Anchor 2',
    value: 1,
  },
  {
    coordinates: [122.5, 27],
    text: 'Anchor 3',
    value: 1,
  },
  {
    coordinates: [157, -70],
    text: 'Anchor 4',
    value: 1,
  },
  {
    coordinates: [-8, -87],
    text: 'Anchor 5',
    value: 1,
  },
]

export const anchorGeneration = () => {
  return (
    {
      type: 'FeatureCollection',
      features: anchorMarkers
        .map((data) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: data.coordinates,
          },
          properties: {
            text: data.text,
            value: data.value,
            //tooltip: `<b>${data.text}</b>\n${data.value}K`,
            url: data.url,
          },
        })),
    }
  )
}
