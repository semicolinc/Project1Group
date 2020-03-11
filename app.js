$(function() {

    $("#searchBtn").on("click", function(event) {

        event.preventDefault();

        var movie = $("#movie-input").val().trim();

        var URL = "https://www.omdbapi.com/?s=" + movie + "&apikey=trilogy";
    
        $.ajax({
            url: URL,
            method: "GET"
        }).then(function(response) {
    
            console.log(response);

            // After retriving all movie with related title, run a for loop to list out all movies
            // set each movie with attr: 1) rating, 2) plot, 3) actors, 4) rotten tomatoes scores, 5) poster.
            // store all movie in a container.

            // var movieDiv = $("<div class='movie>");
            // $("#movie-container").append(movieDiv);
    
        });

    })

   


})