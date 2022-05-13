var quoteApi = require('./quote');
var imageGenerator = require('./image');

var instagramBot = require('./Platforms/Instagram/bot');
var linkedinBot = require('./Platforms/Linkedin/bot');
var twitterBot = require('./Platforms/Twitter/bot');

function PostQuote() {
    const myQuote = quoteApi.getQuotes();
    
    const imagePath = '../Resources/image.png'
    
    // Generate Image

    instagramBot.PostImage(imagePath);
    linkedinBot.PostText(myQuote);
    twitterBot.PostText(myQuote);
}

intervalInMins = 60;

setInterval(PostQuote, 1000 * 60 *  interval);