const API_KEY = '7967da50f03dd25611ea84561c9cda6c'

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}4&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
        const todayIs = document.querySelector('.today_weather')
        const location = document.querySelector('.location')
       const weatherIcon = data.weather[0].icon;
       const img = document.createElement("img")
       img.src = `/src/icons/${weatherIcon}.png`;
       todayIs.appendChild(img)
      location.innerText = data.name;
    })


}
function onGeoError() {
    alert("can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)