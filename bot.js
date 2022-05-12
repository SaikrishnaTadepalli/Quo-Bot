console.log('Hello, World!')

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


// Get tweets based on a query
/*
var params = { 
    q : 'University of Waterloo', // special search term
    count: 2
};

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text)
    }
}

T.get('search/tweets', params, gotData); 
*/

// Post a tweet
function createTextTweet(tweet) {
    var myUpdate = {
        status: tweet
    }
    
    function tweeted(err, data, response) {
        if (err) {
            console.log('Something Went Wrong!')
            console.log(err)
        } else {
            console.log('Worked!')
        }
    }
    
    T.post('statuses/update', myUpdate, tweeted);
}

intervalInMins = 60 * 12;

function GetQuoteText() {
    var r = Math.floor(Math.random() * 100);

    return('here is a random number ' + r + '.')
}

setInterval(createTextTweet(), 1000 * 60 * intervalInMins);

