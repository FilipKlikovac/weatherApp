const apiKey = "5a691dc4d47adbee41332c20fa978fe0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); // Klikom na dugme, salju se podaci iz inputa u checkWeather funkciju;
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){  
    const response = await fetch(apiUrl + city + '&appid={apiKey}');
    var data = await response.json(); // JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

    document.querySelector(".city").innerHTML = data.name;
    //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.checkWeather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"// .src jer je slika u pitanju, tj. da bi smo dobili tacnu lokaciju
    }else if(data.checkWeather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.checkWeather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.checkWeather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.checkWeather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
}   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); // searchBox.value nam daje ime grada iz inputBox-a
});

