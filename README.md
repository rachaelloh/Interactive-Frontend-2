# Interactive-Frontend-2
## Introduction
An interactive one-page website to allow users to search and look for movies where they can watch some related movie trailers upon clicking from the main page itself or upon searching for a particular movie. When users click on an image/movie, up to 4 videos/trailers will be displayed below. This can also help them to make better decisions of their next movie choice. To better suit the target audience of Singaporeans, the region parameter has been added specifically to SG (Singapore) for the 4 main filtered categories so that it is more relevant. However, the search results are not limited to any region so users can obtain results all around.

## Demo
A live website can be found here https://rachaelloh.github.io/Interactive-Frontend-2/

## UX/UI
### Project Strategy
| User Stories        | Description   |  
| :------------- |:-------------| 
| 1    | As an avid movie fan, I want to be kept updated of the movies especially those that are popular and upcoming. I can also choose movies that interest me and watch a quick trailer for movie of my choice.|
| 2    | As a person who does not know much about movies, I want to have access to a list of movies so that I can watch the trailers to find out more.|
| 3    | As a general user, I wish that there are such movie finders so that I can find any movies at any point of time and watch the trailers. |


### Project Scope
The website will be designed based on the identified goals and hence placed in the following sections in a main page:

Search Bar: This will allow users to search for a specific title/keyword of movies where the list of movies will appear on the first row (which is at the Default Movies Row). Search results are not limited to a region.

Default Movies Row: The first row of the page displays a list of preset movies in relation to a keyword, which in this case it is preset to the keyword ‘Avengers’. Users will be able to see the videos/trailers upon clicking on the particular movie that they want. When users search for movies, the results will also appear in this row. 

Top Rated Movies Row: This row will display about 20 Top Rated Movies. Users will be able to see the videos/trailers when they click on the movie. This is specified to a region with an added parameter which I have set to SG (Singapore).

Popular Movies Row: This row will display about 20 Popular Movies. Users will be able to see the videos/trailers when they click on the movie. This is specified to a region with an added parameter which I have set to SG (Singapore).

Upcoming Movies Row: This row will display about 20 Upcoming Movies. Users will be able to see the videos/trailers when they click on the movie. This is specified to a region with an added parameter which I have set to SG (Singapore).

Now Playing Row: This row will display about 20 movies that are Now Playing. Users will be able to see the videos/trailers when they click on the movie. This is specified to a region with an added parameter which I have set to SG (Singapore).

(i) Wireframes

Find below link for wireframe I designed for the web page:

[Interactive Frontend 2](https://drive.google.com/open?id=1jzXbyl6Co83f-r70i5Xl-CNQWJeU5dkV)

## Project Skeleton - Features
**Existing Features**

-The TMDB logo on the top left side of the website links to the mainpage.

-The search bar at the top of the page allows users to search for movies that they want if they are looking for a specific title.

-The movie posters/images and users to click on them and each movie poster links up to 4 of the available trailers. 

-Other than the preset default movies on the top row, users get to see the 4 main categories filtered out for them: Top Rated Movies, Upcoming Movies, Popular Movies, and Now Playing.

**Feature(s) for Future Implementation**

-Include overviews and ratings of the movies

## Testing (Manual)
(i) Mobile Responsiveness

The website has been tested on **Macbook Air/iPad Mini/iPad/iPhone XS/iPhone 6/ Sony Xperia** which covers various screen-size. The browsers used for testings are Google Chrome & Apple Safari.

During the testing process, I found out that:

-On devices such as iPhone and iPad, it might not be obvious to users that there are more movies if they swipe to their left. Hence, I added the instructions to scroll/swipe to the left below the search button/above the default movies.

-The website is unable to work on the iPad Mini IOS9.3.5 and iPad IOS9.3.5.

-The website worked on iPhone 6 IOS12.1.2, iPhone XS IOS13.1.3, iPad  6th  generation IOS12.4.1, iPad Pro IOS13.1.3, and Sony Xperia Android 5.1.1 (Chrome).

In this case, the website was unable to work because of the use of ES6. Javascript ES6 does not support older versions of softwares. The ES6 features used in this project are Const and the arrow function (=>). For this case, these features can only work from IOS10 onwards. Compatibility of software versions for ES6 can be found [here](https://caniuse.com/#search=es6).


(ii) Test Cases

| Test Case(s)      | Test Description   | Outcome | 
| :------------- |:-------------| :-------------| 
| 1    | Users should be able to see the search bar at the top at all times. | Pass|
| 2    | Users will see 'Avengers' related movies on the first row as it is set as the default movie. Next, they will be able to see 'Upcoming Movies', 'Top Rated Movies','Popular Movies' and 'Now Playing'. | Pass|
| 3    | After users search for a movie, the search bar will clear on its own. | Pass|
| 4    | When users click on the search button, the relevant movies will appear on the default row. | Pass|
| 5    | When users click on a movie, the movie trailer(s) will appear below in a dropdown box. Users can choose to watch video in fullscreen mode.| Pass|
| 6    | When there is no movie trailer, users will see 'No trailer found for this movie.' in the dropdown box. | Pass|
| 7    | When users click on the 'X' the dropdown will disappear. | Pass|
| 8    | Users will see more movies when they scroll/swipe to the left.| Pass|
| 9    | When users click on the TMDB logo on the top left corner of the website, they will be redirected to the main page https://rachaelloh.github.io/Interactive-Frontend-2/index.html | Pass|

## Technologies Used
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - This was used to structure the layout of the website and build the pages.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - This was used to beautify the website and to apply styles on the html.
* [Javascript(vanillajs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This was used to interact with users.
* [Bootstrap](https://getbootstrap.com) - Bootstrap is used to ease the structuring and styles of some parts of the website.
* [Google Fonts](https://fonts.google.com/) - GoogleFonts are used to style the texts.

## Deployment
My code was written using [Visual Studio Code](https://code.visualstudio.com/). VS Code serves as the local repository which was then deployed to GitHub. Whenever a new commit is done to the master branch, the deployed site will be updated accordingly. To access the project on Github I would visit the GitHub web page and select rachaelloh/Interactive-Frontend-2. I will then click on settings and click master branch. When the master branch is selected, the deployed website will then be available as a clickable link.

This repository can also be deployed locally by cloning the repository. This can be done by going to the main page of the repository to clone/download directly into the editor of choice by pasting git clone into terminal.

## Credits
This is a list of some websites that helped me throughout the project:

1) Tutorial video on youtube https://www.youtube.com/watch?v=mWg2udweauY
2) [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
3) [Stack Overflow](https://stackoverflow.com/)
4) [w3schools](www.w3schools.com)


**This is for educational use only.**