var Twit = require('twit');
var config = require('./config'); 
 
var T = new Twit(config);

console.log("Starting up...");


function gettingTweets(){
    console.log("Searching Tweets"); 

    param = {
        q: 'stocks',
        count: 10,
    }; 
    
    T.get('search/tweets', param, gotData);

    function gotData(err, data, response){  
        var tweets = data.statuses;  
        var tweetList = [];
        tweets.forEach(gettingTweets); 
        function gettingTweets(eachTweets, index) {
            // console.log('tweets ' + index, eachTweets.text);
            tweetList = eachTweets.text;
            console.log( 'tweet list ' + index, tweetList);
            document.getElementsByClassName('.tweetContent').innerHTML
        }  
    }  
}

gettingTweets();