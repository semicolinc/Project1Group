// run js function after html finish loading
$(function() {
    // run event when button is clicked
    $("#searchBtn").on("click", function(event) {
        // empty previous search data in container 
        $("#movie-container").empty();

        event.preventDefault();
        // create var to store user input
        var movie = $("#movie-input").val().trim();
        // search user input and retrive data from OMDb API through AJAX
        var URL = "https://www.omdbapi.com/?s=" + movie + "&apikey=trilogy";
    
        $.ajax({
            url: URL,
            method: "GET"
        }).then(function(response) {
    
            console.log(response);

            // After retriving all movie with related title, run a for loop to list out all movies
            
            
            for (var i = 0; i < response.Search.length; i++) {
                console.log(response.Search[i]);

                var ID = response.Search[i].imdbID;
                console.log(response.Search[i].imdbID);

                // search by ID to get all data we need.

                var URL = "https://www.omdbapi.com/?i=" + ID + "&apikey=trilogy";
    
                $.ajax({
                    url: URL,
                    method: "GET"
                }).then(function(response) {
                    console.log(response);

                    // set each movie with attr: 1) rating, 2) plot, 3) actors, 4) rotten tomatoes scores, 5) poster.

                    var movieBtn = $("<button class='movie'>");

                    var title = response.Title;

                    var pTitle = $("<p>").text("Title: " + title);

                    movieBtn.append(pTitle);

                    var rating = response.Rated;

                    var pRated = $("<p>").text("Rating: " + rating);

                    movieBtn.append(pRated);

                    var plot = response.Plot;

                    var pPlot = $("<p>").text("Plot: " + plot);

                    movieBtn.append(pPlot);

                    var actors = response.Actors;

                    var pActors = $("<p>").text("Actors: " + actors);

                    movieBtn.append(pActors);
                    // create if else statement to aviod content without ratings not showing in html
                    if (response.Ratings.length > 2) {

                        var rottenTomatoes = response.Ratings[1].Value;

                        var pRottenTomatoes = $("<p>").text("Rotten Tomatoes Score: " + rottenTomatoes);

                        movieBtn.append(pRottenTomatoes);

                    }

                    else {

                        var pRottenTomatoes = $("<p>").text("No Rotten Tomatoes Score Available");

                        movieBtn.append(pRottenTomatoes);
                    };

                    var posterURL = response.Poster;

                    var pPoster = $("<img>").attr("src", posterURL);

                    movieBtn.append(pPoster);

                    // store all movie in a container.
                    $("#movie-container").append(movieBtn);

                });
                

            };




        });

    })

   


})