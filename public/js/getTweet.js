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
            var elem = document.querySelector('#tweetContent');
            elem.innerHTML = ( 'Tweet ' + (index + 1 ) + ':', eachTweets.text ); 
        }   

        // for (tweetLists in tweetList){
        //     console.log( 'Tweet ' , tweetLists);
        // }

        // for (i = 0; i < tweetList.length; i++ ){
        //     // var elem = document.getElementById('tweetContent');
        //     // elem.innerHTML = (index,   tweetList[i]);
        //     console.log( 'Tweet: ', tweetList[i]);
        // }
        // document.getElementById('tweetContent').innerHTML = (index,   tweetList);
        // document.getElementsByClassName('.tweetContent').innerHTML

    }  
}

module.exports = { gettingTweets }
 