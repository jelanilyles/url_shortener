const express = require('express');
// const router = express.Router();
const config = require('config');
const connectDB = require('./config/db');


const createNewShort = url => {

    connectDB();

    let obj = {
        longUrl: url
    }

    fetch('http://localhost:3000/api/url/shorten', {
        Method: 'POST',
        Headers: {
            Accept: 'application.json', 'Content-Type': 'application/json'
        },
        Body: obj,
        Cache: 'default'
    })
}

module.exports = createNewShort;

// createNewShort('https://www.topcoder.com/thrive/articles/fetch-api-javascript-how-to-make-get-and-post-requests');