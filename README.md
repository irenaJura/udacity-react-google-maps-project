### React Google Maps Project (FEND Udacity Nanodegree)

## Description

The project was about making a responsive Google Map of a certain area and display at least 5 locations with markers and finally fetch some information about those places. It includes a search input which filters the locations and makes them clickable. An info window is displayed upon click: it shows the title, a picture and tips about the place. It had to be done using React and a map provider of choice, and a non-Google third-party API. I chose Foursquare API because it was recommended by the course. 

## How to run the app

Clone or download this repo. Using your command line cd into this folder, run npm install and npm start. To check how to use npm visit: https://docs.npmjs.com/getting-started/what-is-npm 

## API Requests 

Fetch API retrieves JSON data asynchronously, and it tells you if there is a problem with loading the info. 

## Accessiblity

I used semantic HTML elements and added ARIA-roles when needed. 

## Offline use

The app uses a service worker to cache responses to requests, so that visited pages can be re-visited in offline mode. This Service worker is enabled in production build. To test it locally build the application by typing npm run build and start an http server from your build directory. See here https://www.npmjs.com/package/http-server for more info. 


