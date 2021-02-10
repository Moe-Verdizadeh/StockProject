const express = require('express'); 
const router = express.Router();
const { gettingTweets } = require('../public/js/getTweet');

router.get('/', async (req, res) => {
    param = {
        q: '$ebon',
        count: 10,
    };
    let theTweets = await gettingTweets();

    res.render('index', { tweets: theTweets });

    // gettingTweets()
    // .then(theTweets => {
    //     res.render('index', { tweets: theTweets });
    // })
    // .catch(err => console.log(err));

    // T.get('search/tweets', param)
    // .then(result => {
    //     console.log('got data in routes index.js');
    //     console.log(result.data.statuses);
    //     res.render('index', { tweets: result.data.statuses });
    // })
    // .catch(err => console.log(err));
})  

router.get('/about', (req, res) => {
    res.render('about');
}) 

module.exports = router;