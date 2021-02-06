var Twit = require('twit');
var config = require('./config');
 
var T = new Twit(config);

console.log("Starting up...");


function gettingTweets(eachTweets){
    console.log("Searching Tweets"); 

    param = {
        q: 'stocks',
        count: 10,
    }; 
    T.get('search/tweets', param, gotData);

    function gotData(err, data, response){
        var eachTweets = [];
        var tweets = data.statuses;
        for(var i = 0; i < tweets.length; i++){
            eachTweets = tweets[i].text;
            console.log('Tweets = ', eachTweets);
            // return eachTweets;
            // return tweets[i].text;
            // console.log('Tweets = ', tweets[i].text);
        }
    // console.log('Tweets = ',eachTweets);
        
    }
    
    return eachTweets;

}

gettingTweets();