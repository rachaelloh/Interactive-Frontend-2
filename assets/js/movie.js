//CONSTANTS
const APIKey = 'de007f66726e0db6dce2c74935c5dda5';
const URL = 'https://api.themoviedb.org/3/search/movie?de007f66726e0db6dce2c74935c5dda5';

//selecting elements from DOM
const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');


searchBtn.onclick = function(event) {
    event.preventDefault(); //prevent any default behavior that browser is doing such as refereshing page
    const value = input.value;

    const newURL = URL + '&query=' + value; //to make it more dynamic so that it still works across


    //built in js function fetch. pass in the url
    fetch(newURL)
        .then((res) => res.json()) //to return json format
        .then((data) => {
            console.log('Data: ', data);
        })
        .catch((error) => { //to catch errors or if api is down
            console.log('Error: ', error);
        });
    console.log ('Value: ', value); //value- the input that users give, will appear in the console
}