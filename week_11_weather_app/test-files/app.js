
// script file...

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector("#search");
const weatherIcon = document.querySelector(".weather-icon");


// const weatherApiKey = 'b2fa3271ab55c9c76e1b2a2d1afd0478';
const weatherApiKey = "844d9c9ead6f0781a8914d63e76a5b4b";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;



const imageApiKey ="2BsfBnNAfcAGF3oX4F_fRIlYnOXYBGYyJpeHfo8AWp4";
const imageURL = "https://api.unsplash.com/search/photos?page=1&query=";




window.addEventListener('load', ()=>{
    setTimeout(()=>{
        document.querySelector("#preloader").style.display = "none";
    },1500)
})


//Weather API call
async function checkWeather(city){
    const response = await fetch(weatherURL + city + `&appid=${weatherApiKey}`);
    const data = await response.json();


    if(response.status === 404){
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = "none";
        document.getElementById("city-img").src = "images/weather.jpg";
    }
    else{
        setTimeout(()=>{
            updateData(data);
        },200)
    }
}

async function updateData(data){

    //Update the weather data
    document.querySelector("#city").textContent = data.name;
    document.querySelector("#temp").textContent = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").textContent = data.main.humidity + '%';
    document.querySelector(".wind").textContent = data.wind.speed + "Km/h";


    //Change the Weather Icon
    const weatherCondition = data.weather[0].main;

    if(weatherCondition == 'Clear'){
        weatherIcon.src = "images/clear.png"
        document.querySelector("#condition").textContent = data.weather[0].main;
    }
    else if(weatherCondition == 'Clouds'){
        weatherIcon.src = "images/clouds.png"
        document.querySelector("#condition").textContent = data.weather[0].main;
    }
    else if(weatherCondition == 'Haze'){
        weatherIcon.src = "images/drizzle.png"
        document.querySelector("#condition").textContent = data.weather[0].main;
    }
    else if(weatherCondition == 'Mist'){
        weatherIcon.src = "images/mist.png"
        document.querySelector("#condition").textContent = data.weather[0].main;
    }
    else if(weatherCondition == 'Rain'){
        weatherIcon.src = "images/rain.png"
        document.querySelector("#condition").textContent = data.weather[0].main;
    }
    else if(weatherCondition == 'Snow'){
        weatherIcon.src = "images/snow.png"
        document.querySelector("#condition").textContent = data.weather[0].main;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = 'none';
}

//Default Call
checkWeather("kolkata");
generateImage("kolkata")


//Image API call
async function generateImage(city){
    const response = await fetch(imageURL + city + `&client_id=${imageApiKey}`)
    const data = await response.json();

    const img = data.results[0].urls.full;

    document.getElementById("city-img").src = img;
    
}


searchBtn.addEventListener('click', (e)=>{
    generateImage(searchBox.value.trim());
    checkWeather(searchBox.value.trim());
})