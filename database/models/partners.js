const mongoose = require('mongoose')

const partnerSchema = new mongoose.Schema({
    name: String,
    url: String,
    info: String
})

const Partners = mongoose.model('Partners', partnerSchema)

module.exports = Partners