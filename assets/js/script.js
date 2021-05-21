let containerDiv = document.getElementById("container")
let searchBtn = document.getElementById("searchBtn")
let data;
var userInput = document.querySelector('#userQuery')

function callApi() {
    let apiKey = "&apikey=a9fe69df";
    var userSearchItem = userInput.value.trim()
    console.log(userSearchItem)
    var url = "http://www.omdbapi.com/?s=" + userSearchItem + apiKey
    var urlPlot = "https://omdbapi.com/?t=" + userSearchItem + "&plot=full" + apiKey
    var urlActors = "https://omdbapi.com/?t=" + userSearchItem + apiKey
    var urlID = "http://www.omdbapi.com/?t=" + userSearchItem + apiKey
    console.log(url)
    $.get(url, function (apiData) {
        var data = apiData.Search[0]
        console.log(apiData);
        var title = apiData.Search[0].Title;
        var year = apiData.Search[0].Year;
        var imdburl = "https://www.imdb.com/title/ " + apiData.Search[0].imdbID + "/";
        var posterimg = apiData.Search[0].Poster
        var relatedSearch = apiData.Search[1].Poster;
        var relatedSearch2 = apiData.Search[2].Poster
        var relatedSearch3 = apiData.Search[3].Poster
        var imdburl1 = "https://www.imdb.com/title/" + apiData.Search[1].imdbID + "/";
        var imdburl2 = "https://www.imdb.com/title/" + apiData.Search[2].imdbID + "/";
        var imdburl3 = "https://www.imdb.com/title/" + apiData.Search[3].imdbID + "/";

        document.getElementById('movietitle').innerHTML = "<h1>" + title + "</h1><br><br>"
        document.getElementById('result').innerHTML = "<h2><img src=" + posterimg + "></h2>"
        document.getElementById('titleyear').innerHTML = "<h1>" + year + "</h1>"
        document.getElementById('relatedsearch').innerHTML = "<h1><a href=" + imdburl1 + "><img id='relatedimg' src=" + relatedSearch + "></a></h1>"
        document.getElementById('relatedsearch2').innerHTML = "<h1><a href=" + imdburl2 + "><img id='relatedimg' src=" + relatedSearch2 + "></a></h1>"
        document.getElementById('relatedsearch3').innerHTML = "<h1><a href=" + imdburl3 + "><img id='relatedimg' src=" + relatedSearch3 + "></a></h1>"

        // callApi2(apiData.Search[0].imdbID)
        
    }) 

    $.get(urlPlot, function (apiData) {
        // console.log(apiData);
        var plot = apiData.Plot;
        var actors = apiData.Actors;

        console.log(plot)
        document.getElementById('description').innerHTML = "<p>" + plot + "</p>"
        document.getElementById('actors').innerHTML = "<h1>" + actors + "</h1>"
    })
    $.get(urlActors, function (apiData) {
        // console.log(apiData);
        var actors = apiData.Actors;

        document.getElementById('actors').innerHTML = "<h1>" + actors + "</h1>"
    })
    $.get(urlActors, function (apiData) {
        // console.log(apiData);
        var actors = apiData.Actors;

        document.getElementById('actors').innerHTML = "<h1>" + actors + "</h1>"
    }).then (function (wmData){
        let apiKey = "?apiKey=4e2LIzHaotnbVkEZLfUoV3TChv5R5kP51ljjJLpo"
        data = wmData
        console.log(wmData);
        var url2 = `https://api.watchmode.com/v1/search/${apiKey}&search_field=name&search_value=${userSearchItem}`;
        console.log(url2)
        return fetch(url2)
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (userData) {
        console.log(userData);
    }).catch(function (error) {
        console.warn(error);
    });

    // $.get(url2, function(wmData){
    //     var wmId = wmData.title_results[0].id
    //     console.log(wmId);
    // })
    


    // function callApi2(imdbID) {
    
    //     // console.log(imdbID)
    //     // var url = `https://api.watchmode.com/v1/title/${movieID}/details/${apiKey}`
    //     // document.getElementById('streaming').innerHTML = "<h1>" + url + "/h1>"
        
    //     // var url = "https://api.watchmode.com/v1/networks/" + apiKey
    // }



    // $.get(url, function (wmData) {
    //     let apiKey = "?apiKey=4e2LIzHaotnbVkEZLfUoV3TChv5R5kP51ljjJLpo"
    //     var movieID = wmData.imdbID;
    //     var url = `https://api.watchmode.com/v1/search/${apiKey}&search_field=name&search_value=${userSearchItem}`
    //     document.getElementById('streaming-section').innerHTML = `<a href=${url}>Click here </a>`
    //     console.log(wmData)
    //     console.log(url)
    //     var data = apiData.title_results.id
    //     // console.log(imdbID)
    //     var tId = data.id
    //     console.log(data)
    //     // console.log(movieID)
    // })



}
searchBtn.addEventListener("click", callApi);
userInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("searchBtn").click();
    }
})


//     $.get(url, function (apiData2) {
//         console.log(apiData2);
//         var title = `https://api.watchmode.com/v1/search/${apiKey}&search_field=name&search_value=${userSearchTerm}`
//         var ID = apiData2.title_results[0].imdb_id;
//     })
// }
