let APIkey = "34f289ed24b76bc42b2be141895213ae"
var searchButton = document.getElementById('search-button')
var searchBox =  document.getElementById('city-input')
function getValue(event){
    event.preventDefault()
    console.log(event.target)
    console.log(event.target.id)
    if(event.target.id === "search-button"){
        return searchAPI(searchBox.value)
    }
    var inputValue = document.getElementById('city-input').value
    return
    if(!inputValue){
        alert("You must type in a city to search")
        return
    }
    searchAPI(inputValue)
}


function searchAPI(inputValue){
    // console.log("hit", inputValue) 
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + inputValue
    + "&units=imperial&appid="
    + APIkey 

    fetch(queryURL)
    .then (function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        // for (var i = 0; i<5;  i++){
        //     weather
        // }
    })
    function displayWeather (data){
const {name} = data;
const {icon, description} =  data.weather[0];
const  {temp, humidity}  = data.main;
const {speed} = data.wind;
console.log(name, icon, description, temp, humidity,speed)
document.querySelector(".inputValue").innerText  = "Forecast  in" +  name;
    }
}
        
    //   let lat = response.data.coord.lat;
    //   let  lon  =  response.data.coord.lon;
    //   let UVQueryURL
  

function addToLocalStorage(randomCity){
    var pastSearches = JSON.parse(localStorage.getItem('history')) || []
    console.log(pastSearches)
    if(pastSearches.includes(randomCity)){
        return
    }
    if(pastSearches.length >5){
        pastSearches.shift()
    } 
    pastSearches.push(randomCity)
    localStorage.setItem('history', JSON.stringify(pastSearches))
    renderStorage()
}

function renderStorage(){
    var pastSearches = JSON.parse(localStorage.getItem('history')) || []
    var historyContainer = document.getElementById("alt-buttons")
    historyContainer.innerHTML= ""
    if(!pastSearches.length){
        var emptyStorageTag = document.createElement('h2')
        emptyStorageTag.innerHTML= "Past Searches will appear here!"
        historyContainer.append(emptyStorageTag)
    }
    for (const city of pastSearches) {
        console.log(city)
        var button = document.createElement('button')
        button.classList.add('btn')
        button.innerHTML = city
        button.addEventListener('click', getValue)
        historyContainer.append(button)
            }
}

renderStorage()
searchButton.addEventListener('click', getValue)