const mongoose = require('mongoose')

const languageSchema = new mongoose.Schema({
  CountryCode: String,
  Language: String,
  isOfficial: String,
  Percentage: String  
})

const Languages = mongoose.model('countrylanguages', languageSchema)

module.exports = Languages