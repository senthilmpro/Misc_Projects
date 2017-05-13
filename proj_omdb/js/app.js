(function () {
    var OMDB = window.OMDB || {};

    OMDB.settings = {
        "user": "senthilmpro",
        "date": new Date(),
        "key": null
    };

    OMDB.defaults = {
        "threads": 1,
        "strict_mode": false,
        "json_printer": true,
        "log_level": "OFF"
    };

    window.OMDB = OMDB;

})();

// main executor function
function main() {
    var default_movies = ['The Dark Knight', 'Ratatouille'];
    var apiKey = "";

    var movieApiUrl = getMovieApiUrl(default_movies[1]);
    if (movieApiUrl) {
        $.get(movieApiUrl, function (data) {
            console.log(data);
            console.log("Load was performed.");
        });
    }
}

//Example call : GET to https://moviesapi.com/m.php?t=Ratatouille&y=&type=movie&r=json
function getMovieApiUrl(movieName) {
    if (movieName) {
        return "https://moviesapi.com/m.php?t=" + movieName + "&y=&type=movie&r=json"
    }
    return null;
}



main();  