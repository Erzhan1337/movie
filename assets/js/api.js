"use strict";

const api_key = "2a3c21f7203959050cb73bdefd2b2ae2";
const imageBaseURL = "http://image.tmdb.org/t/p/";


const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
