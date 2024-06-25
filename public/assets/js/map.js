const map = L.map('map').setView([-26.18511505345862, -58.17422534366621], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marcadorUsuario = null;

async function onMapClick(e) {
    if (marcadorUsuario !== null) {
        map.removeLayer(marcadorUsuario);
    }
    marcadorUsuario = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

    console.log(e.latlng)

    const coords = {
        lat: e.latlng.lat,
        lng: e.latlng.lng
    };

    

    const peticionCoordenadas = await fetch('http://localhost:3000/save-coords', {
        method: 'POST',
        body: JSON.stringify(coords),
        headers: {
            'Content-type': 'application/json'
        }
    })

}

map.on('click', onMapClick);




