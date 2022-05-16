const fs = require('fs')
const { createCanvas } = require('canvas');
const CanvasTextWrapper = require('canvas-text-wrapper').CanvasTextWrapper;

function getImage(quote, author, destination) {
  // basic settings
  const width = 1600;
  const height = 900;

  const textColor = '#CFD8DC';
  const backColor = '#607D8B';

  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // filling the window and choosing text colour 
  context.fillStyle = backColor;
  context.fillRect(0, 0, width, height);
  context.fillStyle = textColor;

  // quote 
  CanvasTextWrapper(canvas, quote,
  {
    lineBreak: 'auto',
    font: '60px Arial',
    verticalAlign: 'middle',
    textAlign: 'center',
    paddingX: 100
  });

    // author
  CanvasTextWrapper(canvas, '- ' + author,
  {
    font: '60px Arial',
    textAlign: 'center',
    paddingY: 600
  });

  // saving
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(destination, buffer)
}

module.exports = { getImage }