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
        count: 1,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-37, 30],
          [-30, 30],
          [-30, 27],
          [13, 27],
          [13, -53],
          [157, -53],
          [157, -87],
          [-37, -87],
        ]],
      },
    }, {
      type: 'Feature',
      properties: {
        name: 'Room 2',
        count: 1,
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
        count: 1,
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
    }
  ],
};

export const markers = {
  type: 'FeatureCollection',
  features: [
    {
      coordinates: [-28, -40],
      text: 'Device 1',
      value: 1,
    },
    {
      coordinates: [45, -20],
      text: 'Device 2',
      value: 1,
    },
    {
      coordinates: [120, -30],
      text: 'Device 3',
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
};
