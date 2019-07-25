const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema({
    currencyName: String,
    cc: String,
    symbol: String
})

const Currencies = mongoose.model('Currencies', currencySchema)

module.exports = Currencies