# My Reads


## Description
This is a project developed for the Udacity & Google Front End Web Developer Scholarship.
The project had a starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template was to save time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that was needed to complete the project. The challenge was to add interactivity to the app by refactoring the static code in this template.
The code was fully converted from a static page to a functional React web app.


## Installation
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Usage
The user is presented with a home screen that has the following elements:
* Currently Reading Books
* Want to Read Books
* Read books
* A button to add books on the bottom right corner

Each book has:
* cover image
* actions button on bottom right corner
* title below
* author below

By clicking the actions button, several actions can be performed on the book:
* move to a different shelf or
* remove completely from the shelves

By clicking the button to add books on the bottom right corner, the user navigates to a search page. Here the user can input a book title; a list of books will be filtered in realtime below. 
Any book in the list below has the same actions button aforementioned.
By clicking on one of the actions, the book can be moved to the appropriate shelf on the home screen.
By clicking the back arrow in the front of the search filed, the user is taken back to the home page. 

IMPORTANT!
By design, provided in the starter package, the search terms are limited to a particular set!
See below for more info!


## Dependencies
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

To simplify the development process, a backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

