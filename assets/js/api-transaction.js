//CONSTANTS
const APIKey = 'de007f66726e0db6dce2c74935c5dda5';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=de007f66726e0db6dce2c74935c5dda5';
const image = 'https://image.tmdb.org/t/p/w500';

function generateurl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=de007f66726e0db6dce2c74935c5dda5`
    return url;
}

function requestMovies(url, onComplete, onError) { //refactoring-functions for success and for error
    fetch(url)
        .then(function(res){
            res.json();
        }).then(onComplete)
        .catch(onError);
}

function searchMovies(value){
    const path = '/search/movie';
    const url = generateurl(path) + '&query=' + value;

    requestMovies(url, renderSearchMovies, handleError);
}

function popMovies(){
    const path = '/movie/popular';
    const url = generateurl(path);

    const render = renderMovies.bind({ title: 'Popular Movies' });
    requestMovies(url, render, handleError);
}

function topMovies(){
    const path = '/movie/top_rated';
    const url = generateurl(path);

    const render = renderMovies.bind({ title: 'Top Rated Movies' });
    requestMovies(url, render, handleError);
}

function upcomingMovies(){
    const path = '/movie/upcoming';
    const url = generateurl(path);

    const render = renderMovies.bind({ title: 'Upcoming Movies' });
    requestMovies(url, render, handleError);
}
