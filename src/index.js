var quoteApi = require('./quote');
var imageGenerator = require('./image');
var fs = require('fs');

var instagramBot = require('./Platforms/Instagram/bot');
var linkedinBot = require('./Platforms/Linkedin/bot');
var twitterBot = require('./Platforms/Twitter/bot');

async function PostQuote() {
  const quotes = await quoteApi.getQuotes();

  const ind = Math.floor(Math.random() * (quotes.length - 1));

  const quote = quotes[ind].quote;
  const author = quotes[ind].author;
  
  const imagePath = './Resources/image.png';

  // Generate Image
  imageGenerator.getImage(quote, author, imagePath);

  // Post Quote
  //instagramBot.PostImage(imagePath);
  //linkedinBot.PostText(quote, author);
  //twitterBot.PostText(quote, author);
  twitterBot.PostImage(imagePath);

  console.log('Posted')
}

min = 1000 * 60;
intervalInMins = 0.1;

setInterval(PostQuote, min *  intervalInMins);