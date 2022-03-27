const apiKey = `6662fd055feda18c9c92dd8a48197078
`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displayTemperature(json));

};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main)
    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}d@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

