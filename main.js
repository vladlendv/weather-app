'use strict';

// API_KEY openweather

let city = ['perm', 'moscow', 'kungur', 'london']
let cityList = document.querySelector('#city-list')
let resp = document.querySelector('#resp')
let currentCity = null


for (let i = 0; i < city.length; i++) {
    cityList.insertAdjacentHTML('afterbegin', `<option>${city[i]}</option>`)
}

document.addEventListener('DOMContentLoaded', () => renderWeather())
cityList.addEventListener('change', e => renderWeather(e))

function renderWeather(entry) {
    let currentCity = entry ? entry.target.value : 'perm'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=API_KEY`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let time = new Date()
            resp.innerText = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`
            resp.innerHTML += `<br>В городе ${currentCity} сейчас: ` + (data.main.temp.toFixed(0) - 273) + '&deg;C'
        })
}
   



