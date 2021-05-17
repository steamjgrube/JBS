var test = document.querySelector(".container");
var userInputEl = document.getElementById("userInputEl");
var searchField = document.getElementById("searchField");
var searchBtn = document.getElementById("searchBtn");

function getApi(userInput) {
    var request = "http://www.omdbapi.com/?t=" + userInput + "&apikey=23c153c2";
    fetch(request)
    .then(function(response) {
        console.log(response);
         return response.json()
 
    })
    
    // .then(function(data) {
    //    // var info = JSON.parse(this.response);
    //     for (var i = 0; i < data.length; i++) {
    //         var item = document.createElement("li")
    //         item.textContent = data[i].title;
    //         test.appendChild(item);
    //     }
    //     console.log(data)
    // })
}



function displaySearch(data) {
    if (data.length === 0) {
        test.textContent = "No search found.";
        return;
    }

    
}

searchBtn.addEventListener("click", getApi);