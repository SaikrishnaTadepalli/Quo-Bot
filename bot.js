console.log('Hello, World!')

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
var quoteApi = require('./quote')


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
function createTweet(tweet) {
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


async function GetQuoteText() {
  const quotes = await quoteApi.getQuotes();
  const quoteArrayLen = quotes.length - 1;
  const ind = Math.floor(Math.random() * quoteArrayLen);
  return quotes[ind];
}

intervalInMins = 1

createTweet(GetQuoteText())

setInterval(createTweet, 1000 * 60 * intervalInMins);

