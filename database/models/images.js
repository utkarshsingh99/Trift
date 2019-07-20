const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageName: String,
    imageUrl: String
})

const Images = mongoose.model('images', imageSchema)

module.exports = Images