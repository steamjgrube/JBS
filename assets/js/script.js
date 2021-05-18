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
    var urlActors = "http://www.omdbapi.com/?t=" + userSearchItem + apiKey
    var imdbID = "http://www.omdbapi.com/?i=" + userSearchItem + apiKey
    console.log(url)
    $.get(url, function (apiData) {
        console.log(apiData);
        var title = apiData.Search[0].Title;
        var year = apiData.Search[0].Year;
        var imdburl = "https://www.imdb.com/title/ " + apiData.Search[0].imdbID+"/";
        var posterimg = apiData.Search[0].Poster
        var relatedSearch = apiData.Search[1].Poster;
        var relatedSearch2 = apiData.Search[2].Poster
        var relatedSearch3 = apiData.Search[3].Poster
        var imdburl1 = "https://www.imdb.com/title/" + apiData.Search[1].imdbID+"/";
        var imdburl2 = "https://www.imdb.com/title/" + apiData.Search[2].imdbID+"/";
        var imdburl3 = "https://www.imdb.com/title/" + apiData.Search[3].imdbID+"/";

        document.getElementById('movietitle').innerHTML="<h1>"+title+"</h1><br><br>"
        document.getElementById('result').innerHTML="<h2><img src="+posterimg+"></h2>"
        document.getElementById('titleyear').innerHTML="<h1>"+year+"</h1>"
        document.getElementById('relatedsearch').innerHTML="<h1><a href=" +imdburl1+"><img id='relatedimg' src="+relatedSearch+"></a></h1>"
        document.getElementById('relatedsearch2').innerHTML="<h1><a href=" +imdburl2+"><img id='relatedimg' src="+relatedSearch2+"></a></h1>"
        document.getElementById('relatedsearch3').innerHTML="<h1><a href=" +imdburl3+"><img id='relatedimg' src="+relatedSearch3+"></a></h1>"
        
    })
    $.get(urlPlot, function (apiData) {
        console.log(apiData);
        var plot = apiData.Plot;
        var actors = apiData.Actors;

        console.log(plot)
        document.getElementById('description').innerHTML="<p>"+plot+"</p>"
        document.getElementById('actor').innerHTML="<h1>"+actors+"</h1>"
    })
    $.get(urlActors, function (apiData) {
        console.log(apiData);
        var actors = apiData.Actors;
        
        document.getElementById('actors').innerHTML="<h1>"+actors+"</h1>"
    })
    $.get(urlActors, function (apiData) {
        console.log(apiData);
        var actors = apiData.Actors;
        
        document.getElementById('actors').innerHTML="<h1>"+actors+"</h1>"
    })
}
searchBtn.addEventListener("click", callApi);