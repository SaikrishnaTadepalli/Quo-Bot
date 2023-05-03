
# QuoBot

QuoBot is a Node.js application that fetches inspirational and motivational quotes from the ZenQuotes API, formats them into beautiful images, and automatically posts them to Twitter on a timely basis. With QuoBot, you can effortlessly share inspiring quotes with your followers and keep them engaged and motivated.

View QuoBot's Twitter Posts here (currently offline): https://twitter.com/QuoBot225 




## Features

- Fetches quotes from the ZenQuotes API.
- Automatically formats quotes into beautiful images with solid color backgrounds.
- Posts quotes to Twitter on a timely basis.
- Can be easily extended to support other platforms like LinkedIn, Instagram, Facebook, etc.


## How It Works

QuoBot is a command-line application that runs continuously in the background and periodically fetches quotes from the ZenQuotes API. It then uses a custom image generation algorithm to create beautiful images with solid color backgrounds and the text of the quote. Finally, it posts the generated images to Twitter using the Twit API.
## Getting Started

- Install Node.js: If you don't already have Node.js installed on your system, you can download it from the official website: https://nodejs.org/.

- Clone the QuoBot repository: Use the following command to clone the QuoBot repository to your local machine:

```
git clone https://github.com/SaikrishnaTadepalli/QuoBot.git
```

- Install the dependencies: Navigate to the cloned repository directory and run the following command to install the required dependencies:

```
npm install
```

- Set up the environment variables: QuoBot uses environment variables to store sensitive information like API keys and access tokens. To set up the environment variables, create a .env file in the root directory of the project and add the following variables:
```
TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-twitter-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```

Replace 'your-twitter-consumer-key', 'your-twitter-consumer-secret', 'your-twitter-access-token-key', and 'your-twitter-access-token-secret' with your actual Twitter API keys and access tokens.

- Start QuoBot: Run the following command to start QuoBot:


QuoBot will start fetching quotes from the ZenQuotes API, generating images, and posting them to Twitter automatically at the specified interval.


## Future Plans

QuoBot is currently only supported on Twitter, but we have plans to extend its capabilities to other social media platforms like LinkedIn, Instagram, and Facebook in the future. 

With QuoBot, you'll soon be able to share inspiring quotes with your followers across all your social media accounts with ease.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License
