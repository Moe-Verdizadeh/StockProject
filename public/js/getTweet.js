var Twit = require('twit');
var config = require('./config');  
var T = new Twit(config);
 

console.log("Starting up...");


function gettingTweets(){
    console.log("Searching Tweets"); 

    param = {
        q: '$ebon',
        count: 10,
    };

    let tweets;
    
    T.get('search/tweets', param)
    .then(data => {
        console.log('got data');
        tweets = data;
        return data;
    })
    .catch(err => console.log(err));
}

module.exports = { gettingTweets }
 