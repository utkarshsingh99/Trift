const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    Name: String,
    CountryCode: String,
    District: String,
    Population: String
})

const Cities = mongoose.model('cities', citySchema)

module.exports = Cities