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
        // for(var i = 0; i < tweets.length; i++){
        //     eachTweets = tweets[i].text;
            // console.log('Tweets = ', eachTweets);
            // return eachTweets;
            // return tweets[i].text;
            // console.log('Tweets = ', tweets[i].text); 
        // }
        var tweetList = [];
        tweets.forEach(gettingTweets); 
        function gettingTweets(eachTweets, index) {
            // console.log('tweets ' + index, eachTweets.text);
            tweetList = eachTweets.text;
            console.log( 'tweet list ' + index, tweetList);
            document.getElementById("tweetContent").innerHTML += index + ":" + eachTweets ;
        } 
    }  
}

gettingTweets();