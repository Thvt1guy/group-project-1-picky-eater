mapboxgl.accessToken = 'pk.eyJ1IjoiYW50cG9udCIsImEiOiJjbGR1eDRjeHkwMXpiM3BwZ2hlYjcwOHpnIn0.M4sVNfG-Gzfup4Gpspmprw';



function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() { 
    setupMap([])
}


function setupMap(center) { 

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: center,
    zoom: 12,
})
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

