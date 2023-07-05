# url_shortener

This project creates and hosts shortened URLs. Most of the logic was found on YouTube at https://www.youtube.com/watch?v=Z57566JBaZQ, with a few minor edits.

## Features

    The project runs on a local server through Node and stores its data through MongoDB.
    
    Other packages include:
    1. Express, used to create the API routes
    2. Mongoose, used to create the JSON data schema/format
    3. valid-url, used to validate the URLs to be shortened
    4. Config, used to create the configuration for connection with the database, MongoDB in this case
    5. shortid, used to generate shortid's to be used in the short URLs
    6. REST Client, extension used to submit requests to the MongoDB server