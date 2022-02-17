const room1 = {
    coordinateX: -28,
    coordinateY: -40
}

const room2 = {
    coordinateX: 45,
    coordinateY: -20
}

const room3 = {
    coordinateX: 120,
    coordinateY: -30
}

const room4 = {
    coordinateX: 86,
    coordinateY: -80
}

const Device1 = {
    text: 'Device 1',
}

const Device2 = {
    text: 'Device 2',
}

const Device3 = {
    text: 'Device 3',
}

const Device4 = {
    text: 'Device 4',
}

const dataGeneration = (data) => {
    var lis = [
        

    ]

    data.map((item) => {

        var deviceID = {}
        var roomID = {}
        var x = 1
        var y = 2

        switch (item.id) {
            case 'device1':
                deviceID = Device1
                break;
            case 'device2':
                deviceID = Device2
                break;
            case 'device3':
                deviceID = Device3
                break;
            case 'device4':
                deviceID = Device4
                break;
            default:
                deviceID = deviceID
        }

        switch (item.last) {
            case '1':
                roomID = room1
                break;
            case '2':
                roomID = room2
                break;
            case '3':
                roomID = room3
                break;
            case '4':
                roomID = room4
                break;
            default:
                roomID = roomID
        }

        lis.push({
            coordinates: [ parseInt(roomID.coordinateX) + x, parseInt(roomID.coordinateY) + y],
            text: deviceID.text,
            value: 1,
        })
    })

    return(
        {
            type: 'FeatureCollection',
            features: lis
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
                        color: '#812904',
                    },
                })),
        }
    )
    
}

export default dataGeneration