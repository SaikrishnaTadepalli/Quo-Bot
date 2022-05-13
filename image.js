function DrawImage(text, path, textColor, backColor) {
    const fs = require('fs')
    const { createCanvas, loadImage } = require('canvas')

    const width = 1600
    const height = 900

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    context.fillStyle = backColor
    context.fillRect(0, 0, width, height)

    context.font = 'bold 80pt Menlo'
    context.textAlign = 'center'
    context.textBaseline = 'top'

    const textWidth = context.measureText(text).width
    context.fillRect(height - textWidth / 2 - 10, height / 2, textWidth, 400)
    context.fillStyle = textColor
    context.fillText(text, 800, 400)

    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(path, buffer)
}

DrawImage("I love you baby", './test.png', '#F00', '#039')