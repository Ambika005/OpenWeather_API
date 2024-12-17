const apikey="7eb40124085c72225eb6dc76589069c0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";

const inputbox =document.querySelector(".input input")
const searchbtn = document.querySelector(".input button")

async function CheckWeather(city){
    const response = await fetch(apiurl+ city +`&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".windspeed").innerHTML= data.wind.speed+ "km/hr";
    document.querySelector(".temp").innerHTML = data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";

}


searchbtn.addEventListener("click",()=>{
    CheckWeather(inputbox.value);
})

