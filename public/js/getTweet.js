var Twit = require('twit');
var config = require('./config');  
var T = new Twit(config); 

console.log("Starting up..."); 

async function gettingTweets(){
    console.log("Searching Tweets"); 

    param = {
        q: '$ebon',
        count: 20,
    };

    let tweets = await T.get('search/tweets', param);

    // console.log(tweets.data.statuses);

    return tweets.data.statuses;

    // T.get('search/tweets', param)
    // .then(result => {
    //     console.log('got data');
    //     console.log(result);
    //     return result.data.statuses;
    // })
    // .catch(err => console.log(err)); 
}  

module.exports = { gettingTweets } 