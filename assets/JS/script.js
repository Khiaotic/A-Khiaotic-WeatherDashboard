let APIkey = "34f289ed24b76bc42b2be141895213ae"
var searchButton = document.getElementById('search-button')

function getValue(event){
    event.preventDefault()
    console.log(event.target)
    if(!event.target.id){
        return searchAPI(event.target.innerHTML)
    }
    var inputValue = document.getElementById('city-input').value
    return
    if(!inputValue){
        alert("You must type in a city to search")
        return
    }
    searchAPI(inputValue)
}


function searchAPI(city){
    url = https:''/// + city+ apiKey
}
    fetch(url).then(response=>{
        if error.throw error
    }).then(data=> {

    })
)

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