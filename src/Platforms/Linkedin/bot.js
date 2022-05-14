var config = require('./config');

function PostText(quote, author) {
  console.log('Post Quote: ' + quote);
  console.log('Author of quote: ' + author);
}

module.exports = { PostText }