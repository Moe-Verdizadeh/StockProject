const express = require('express');
const router = express.Router();  
//const { gettingTweets } = require('../public/js/getTweet');
var Twit = require('twit');
var config = require('../public/js/config');  
var T = new Twit(config);

router.get('/', async (req, res) => {
    param = {
        q: '$ebon',
        count: 10,
    };

    let tweets;
    
    T.get('search/tweets', param)
    .then(result => {
        console.log('got data in routes index.js');
        console.log(result.data.statuses);
        res.render('index', { tweets: result.data.statuses });
    })
    .catch(err => console.log(err));
}) 


router.get('/about', (req, res) => {
    res.render('about');
}) 

module.exports = router;