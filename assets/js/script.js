let containerDiv = document.getElementById("container")
let searchBtn = document.getElementById("searchBtn")
let data;
let apiKey = "&apikey=a9fe69df";
var userInput = document.querySelector('#userQuery')

function callApi () {
    var userSearchItem = userInput.value.trim()
    console.log(userSearchItem)
    var url = "http://www.omdbapi.com/?s=" + userSearchItem + apiKey
    var urlPlot = "http://www.omdbapi.com/?t=" + userSearchItem + "&plot=full" + apiKey
    console.log(url)
    $.get(url, function (apiData) {
        console.log(apiData);
        var title = apiData.Search[0].Title;
        var year = apiData.Search[0].Year;
        var imdburl = "https://www.imdb.com/title/ " + apiData.Search[0].imdbID+"/";
        var posterimg = apiData.Search[0].Poster

        document.getElementById('movietitle').innerHTML="<h1>"+title+"</h1><br><br>"
        document.getElementById('result').innerHTML="<h2><img src="+posterimg+"></h2>"
    })
    $.get(urlPlot, function (apiData) {
        console.log(apiData);
        var plot = apiData.Plot;
        console.log(plot)
        document.getElementById('description').innerHTML="<p>"+plot+"</p>"
    })
}
searchBtn.addEventListener("click", callApi);