
//selecting elements from DOM
const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');
const moviesSearch = document.querySelector('#moviesSearch');
const moviesContainer = document.querySelector('#moviesContainer');

function movieSections(movies) {
    const section = document.createElement('section');
    section.classList = 'section';

    movies.map((movie) => {
        //if statement so that image will only display if there is image provided in api
        if (movie.poster_path) {
            const img = document.createElement('img');
            //to link to poster path of the api    
            img.src = image + movie.poster_path;
            img.setAttribute('data-movie-id', movie.id);

            section.appendChild(img);
        }
    })

    return section;
}

function containMovie(movies, title = '') { //the div of the movie
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');
    
    const header = document.createElement('h2');
    header.innerHTML = title;
    
    const content = document.createElement('div');
    content.classList = 'content';

    const contentClose = `<p id="content-close">X</p>`;
    
    content.innerHTML = contentClose;

    const section = movieSections(movies);
    
    movieElement.appendChild(header);
    movieElement.appendChild(section);
    movieElement.appendChild(content);
    return movieElement;
}

function renderSearchMovies(data) {

    moviesSearch.innerHTML = ''; //will remove previous values and replace with new
    const movies = data.results;
    const movieBlock = containMovie(movies);
    /*select element "movieSearch from html file 
    and js select the movieblock values to be placed into the html file"*/
    moviesSearch.appendChild(movieBlock);
}

function renderMovies(data) {
    const movies = data.results;
    const movieBlock = containMovie(movies, this.title);
    moviesContainer.appendChild(movieBlock);
}

function handleError(error){
    console.log('Error: ', error);
}

searchBtn.onclick = function (event) {
    //prevent any default behavior that browser is doing such as refereshing page
    event.preventDefault();
    const value = input.value;
    searchMovies(value);

    //when search button is clicked, the input box will clear
    input.value = '';
    //value- the input that users give, will appear in the console
    console.log('Value: ', value);
}

//to embed videos
function createIframe(video) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;

    return iframe;
}

function createVidTemp(data, content) {
    content.innerHTML = '<p id="content-close">X</p>'; //to overwrite everything in this <p> tag, to clear vids after each search
    console.log("Videos: ", data);
    const videos = data.results;
    // if value is more than 4, just loop 4, otherwise, loop whichever value that it has
    const length = videos.length > 4 ? 4 : videos.length;
    //to store all iframes into the div created
    const iframeContainer = document.createElement('div');
    
    for (let i = 0; i < length; i++) {
        const video = videos[i];
        const iframe = createIframe(video);
        iframeContainer.appendChild(iframe);
        content.appendChild(iframeContainer);
    }
}

//event delegation, listen to entire DOM document
document.onclick = function (event) {

    const target = event.target;

    //when users click on an image, something will appear below
    //target tagname image, parent and sliblings also targetted
    if (target.tagName.toLowerCase() === 'img') {
        const movieId = target.dataset.movieId;
        console.log('Movie ID: ', movieId);
        const section = event.target.parentElement; //target section
        const content = section.nextElementSibling; // target content
        content.classList.add('content-display');

        const path = `/movie/${movieId}/videos`;
        const url = generateurl(path);
        //fetch videos
        fetch(url)
            .then((res) => res.json())
            .then((data) => createVidTemp(data, content))
            .catch((error) => {
                console.log('Error: ', error);
            });
    }
    //when users click close, the content will close
    //target id content
    if (target.id === 'content-close') {
        const content = target.parentElement; // target content
        content.classList.remove('content-display');
    }
}

searchMovies('Avengers');
popMovies();
topMovies();
upcomingMovies();