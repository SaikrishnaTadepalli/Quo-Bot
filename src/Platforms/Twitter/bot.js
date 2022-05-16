var Twit = require('twit');
var config = require('./config');
var fs = require('fs');

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
function PostText(quote, author) {
  console.log('Author of quote: ' + author);
  var myUpdate = {
    status: quote
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

function PostImage(imagePath) {
  params = {
    encoding: 'base64'
  }

  var b64content = fs.readFileSync(imagePath, params);

  function uploaded(err, data, response) {
    var id = data.media_id_string;

    var tweet = {
      status: '',
      media_ids: [id]
    }

    function tweeted(err, data, response) {
      if (err) {
        console.log('Something Went Wrong!')
        console.log(err)
      } else {
        console.log('Worked!')
      }
    }

    T.post('statuses/update', tweet, tweeted);
  }

  T.post('media/upload', {media_data: b64content}, uploaded);
}


module.exports = { PostText, PostImage }