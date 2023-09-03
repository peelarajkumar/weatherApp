//Dom Manipulation getting elements


console.log('In the debugger')
let cityname = document.getElementById('cityInput')
const cityorigin = document.getElementById('cityName')
const mintemp = document.getElementById('mintemp')
const maxtemp = document.getElementById('maxtemp')
const condition = document.getElementById('condition')
const description = document.getElementById('description')
const showweather = document.getElementById('fetchWeatherButton')

//adding event to the button


showweather.addEventListener('click', () => {
    if (!cityname.value) {
       alert('Please enter City Name')
        return
    }
    displayweather(cityname.value)
})

//Calling API Using Async 
async function displayweather(cityname) 
{
    const apiKey = '88a452d9997b914212a0f6b43c1260c6'
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`;
    let resposne = await fetch(apiUrl)
    let citydata = await resposne.json();
       if (citydata.cod === 200) {
          cityorigin.textContent = citydata.name
          mintemp.textContent = citydata.main.temp_min + " degrees Celcius";
          maxtemp.textContent = `${citydata.main.temp_max} degrees Celcius`;
          condition.textContent = ` hill ${citydata.base} and ${citydata.weather[0].main}`
          description.textContent = `Summary Description ${citydata.weather[0].description}`
  }


    else {
        let err = new Error('City Not Found. Enter Other City')

        console.log(err);

            (function clearcityinfo() {

                cityorigin.textContent = "";

                mintemp.textContent = "";

                maxtemp.textContent = "";

                condition.textContent = ""
            })();
    }

}
