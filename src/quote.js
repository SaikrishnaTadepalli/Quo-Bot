const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const quotesURL = "https://zenquotes.io/api/quotes/";
const quotes = [];

async function getQuotes() {
  await fetch(quotesURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('unable to resolve quotes api')
    })
    .then((responseJSON) => {
      responseJSON.forEach((quote) => {
        quotes.push({
          quote: quote.q,
          author: quote.a,
        })
      })
    })
    .catch((err) => console.log(err));
  return quotes;
}

module.exports = { getQuotes }
