//CONSTANTS
const APIKey = 'de007f66726e0db6dce2c74935c5dda5';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const image = 'https://image.tmdb.org/t/p/w500/';

//selecting elements from DOM
const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');
const movieSearch = document.querySelector('#moviesSearch');

function generateURL(path) {
    const URL = `https://api.themoviedb.org/3${path}?api_key=` + APIKey
    return URL;
}

function movieSections(movies){
   return movies.map((movie) => {
       //if statement so that image will only display if there is image provided in api
        if (movie.poster_path) {
        //to link to poster path of the api    
            return `<img src=${image + movie.poster_path} data-movie-id=${movies.id}/>`;
        }
    })
}

function containMovie(movies) { //the div of the movie
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    //this section will be appended to the function containMovie
    const movieTemplate = ` 
        <section class="section">
            ${movieSections(movies)}
        </section>
        <div class="content content-display">
            <p id="content-close">X</p>
        </div>
    `;
    
    /*the above `` does not allow a child to append to it, 
    hence the below will work*/
    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

function renderSearchMovies(data) {
    
    moviesSearch.innerHTML = ''; //will remove previous values and replace with new
    const movies = data.results;
    const movieBlock = containMovie(movies);
    /*select element "movieSearch from html file 
    and js select the movieblock values to be placed into the html file"*/
    movieSearch.appendChild(movieBlock); 
    console.log('Data: ', data);

}

searchBtn.onclick = function(event) {
    //prevent any default behavior that browser is doing such as refereshing page
    event.preventDefault(); 
    const value = input.value;

    //to make it more dynamic so that it still works across
    const newURL = URL + APIKey + '&query=' + value;


    //built in js function fetch. pass in the url
    fetch(newURL)
        .then((res) => res.json()) //to return json format
        .then(renderSearchMovies)
        .catch((error) => { //to catch errors or if api is down
            console.log('Error: ', error);
        });

    //when search button is clicked, the input box will clear
    input.value = '';

    //value- the input that users give, will appear in the console
    console.log ('Value: ', value); 
}

//event delegation, listen to entire DOM document
document.onclick = function(event) {
    
    const target = event.target;
    
    //when users click on an image, something will appear below
    //target tagname image, parent and sliblings also targetted
    if (target.tagName.toLowerCase() === 'img') {
        console.log('Hello World');
        console.log('Event: ', event);
        const movieID = target.dataset.movieId;
        console.log('Movie ID: ', movieId);
        const section = event.target.parentElement; //target section
        const content = section.nextElementSibling; // target content
        content.classList.add('content-display');
    }

    //when users click close, the content will close
    //target id content
    if (target.id === 'content-close') {
        const content = target.parentElement; // target content
        content.classList.remove('content-display');
    }
}

    