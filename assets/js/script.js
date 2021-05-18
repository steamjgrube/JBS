let containerDiv = document.getElementById("container")
let searchBtn = document.getElementById("searchBtn")
let data;
let apiKey = "&apikey=a9fe69df";
var userInput = document.querySelector('#userQuery')

function callApi () {
    var userSearchItem = userInput.value.trim()
    console.log(userSearchItem)
    var url = "http://www.omdbapi.com/?s=" + userSearchItem + apiKey
    console.log(url)
    $.get(url, function (apiData) {
        console.log(apiData);
        var title = apiData.Search[0].Title;
        var year = apiData.Search[0].Year;
        var imdburl = "https://www.imdb.com/title/ " + apiData.Search[0].imdbID+"/";
        var posterimg =  apiData.Search[0].Poster

        document.getElementById('result').innerHTML="<h1>"+title+"</h1>"
        document.getElementById('result').innerHTML="<h1>"+posterimg+"</h1>"
    }
    )}
searchBtn.addEventListener("click", callApi);

function showDisplay () {
    
}