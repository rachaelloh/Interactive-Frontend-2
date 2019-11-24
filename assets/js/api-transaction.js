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
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovies(value){
    const path = '/search/movie';
    const url = generateurl(path) + '&query=' + value;

    requestMovies(url, renderSearchMovies, handleError);

}