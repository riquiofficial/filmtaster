# FilmTaster

<img src="https://www.rqwebdev.com/images/filmtaster.webp" alt="FilmTaster Website">

## Introduction

The aim of this build was to create a modern, attractive, responsive static site which connects to TMDB REST API, to fetch and display movie data in a pleasant way to the client.

Working on this project helped to solidify my understanding of styled-components using CSS Grid in React and gain experience of working with REST API's.

## Technologies

This project utilises ReactJS to build a web app wich connects to TMDB REST API. It is a static site which uses React-Router to switch pages using each movie's unique ID. All additional links i.e. Youtube, images etc, were formatted in the file API.js, using the url extension given from TMDB's database. The data was fetched using Axios and is distributed throughout the app using Redux state management.

The CSS was typed using Styled Components and the app is split into multiple components for improved organisation and scalability.

#### Versions used:

React 17.0.1
react-router/react-router-dom 5.2.0
styled-components 5.2.1
framer-motion 3.1.1
Jest 5.11.6
Axios 0.21.0
react-redux 7.2.2
Redux 4.0.5
Redux Thunk 2.3

# Launch

The website can be viewed at: https://filmtaster.netlify.app/

Alternatively, you can clone and run this Github repo using the below commands into your directory:

`git clone https://github.com/riquiofficial/filmtaster`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
