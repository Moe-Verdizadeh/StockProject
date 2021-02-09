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
    
    T.get('search/tweets', param, gotData);

    function gotData(err, data, response){  
        var tweets = data.statuses;  
        var tweetList = [];
        tweets.forEach(loopingTweets); 
        function loopingTweets(eachTweets, index) { 
            tweetList = eachTweets.text;
            console.log( 'Tweet ' + (index + 1 ) + ':', tweetList);  
        }     
        // for (i = 0; 1 <= tweetList.length; i++){
        //     tweetList[i];
        //     console.log('tweetList', tweetList)
        // }
        
    }  
}

module.exports = { gettingTweets }

// var elem = window.document.querySelector('#tweetContent');
// elem.innerHTML = ( 'Tweet ' + (index + 1 ) + ':', eachTweets.text ); 