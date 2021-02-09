const express = require('express');
const router = express.Router();  
var getTweet = require('../public/js/getTweet'); 

router.get('/', (req, res) => {
    res.render( 'index', { tweet: getTweet.gettingTweets()} );
})  

router.get('/about', (req, res) => {
    res.render('about');
}) 

module.exports = router;