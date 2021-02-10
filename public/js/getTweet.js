var Twit = require('twit');
var config = require('./config');  
var T = new Twit(config);
 
 

console.log("Starting up...");


async function gettingTweets(){
    console.log("Searching Tweets"); 

    param = {
        q: '$ebon',
        count: 10,
    };

    let tweets = await T.get('search/tweets', param);

    //console.log(tweets);

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

// var elem = window.document.querySelector('#tweetContent');
// elem.innerHTML = ( 'Tweet ' + (index + 1 ) + ':', eachTweets.text ); 