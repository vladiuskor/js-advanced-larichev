'use strict'

/*
    Отримати геолокацію користувача через Geolocation.getCUrrentPosition() (Web API)
    та по координатам визначити місто, відпрививши запит:

*/
function getMyCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            },
            (err) => reject(err)
        );
    });
}

async function getMyCity() {
    try {
        const {latitude, longitude} = await getMyCoordinates();
        const response = await fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=[API KEY]`)
        if(!response.ok) {
            throw new Error(response.status)
        }

        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.log(e)
    }
    
}

getMyCity();

