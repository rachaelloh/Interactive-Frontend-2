
//selecting elements from DOM
const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');


searchBtn.onclick = function(event) {
    event.preventDefault(); //prevent any default behavior that browser is doing such as refereshing page
    const value = input.value;
    console.log ('Value: ', value); //value- the input that users give, will appear in the console
}