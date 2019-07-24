const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    Name: String,
    ID: String,
    CountryCode: String,
    District: String,
    Population: String
})

const Countries = mongoose.model('Countries', countrySchema)

module.exports = Countries