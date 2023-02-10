

/**
 * adds map based on given longitude and latitude
 * @param {float} longitude 
 * @param {float} latitude 
 */
function addingMap(longitude, latitude){
    return `<img alt='static Mapbox map of the San Francisco bay area' src='https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s+555555(${longitude},${latitude})/${longitude},${latitude},15,0.00,0.00/600x600@2x?access_token=pk.eyJ1IjoidGh2dDFndXkiLCJhIjoiY2xkdXVlOXh3MDljNTNvcGNzbm4xM2o3biJ9.DDrsJrhNjKnPlLlVAiQSBA' >`
    }
     
    
