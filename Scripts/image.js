const fs = require('fs')
const { createCanvas } = require('canvas');

// basic settings
const width = 1600;
const height = 900;

const textColor = '#CFD8DC';
const backColor = '#607D8B';

const destination = './image.png'; //p

const canvas = createCanvas(width, height); 
const context = canvas.getContext('2d');

//p
//p
const quote = 'Hello darkness my old friend. I\'ve come to talk with you again.';
const author = '-Sa Ad';

// filling the window

context.fillStyle = '#607D8B';
context.fillRect(0, 0, width, height);

// quote text

context.font = 'bold 70pt Menlo';
context.textAlign = 'center';
context.fillStyle = '#CFD8DC';
context.fillText(quote, width / 2, height / 2)

// author text

context.fillStyle = '#fff'
context.font = 'bold 30pt Menlo'
context.fillText(author, width / 2, (height  * 2 ) / 3 )


// saving
const buffer = canvas.toBuffer('image/png')
fs.writeFileSync(destination, buffer)