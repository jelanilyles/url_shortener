const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');

// @route POST /api/url/shorten
// @desc Create a shortened url
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    // Create url code
    const urlCode = shortid.generate();

    // Check long url
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });
            let url2;
            

            if(url) {
                url2 = {
                    shortUrl: url.get('shortUrl'),
                    date: new Date()
                };

                res.json(url2);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                url2 = {
                    shortUrl: shortUrl,
                    date: new Date()
                };

                await url.save();

                res.json(url2);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid long url');
    }
});

module.exports = router;