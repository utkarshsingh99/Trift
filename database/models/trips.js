const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['curated', 'guided']
    },
    tripName: String,
    totalValue: Number,
    currency: {
      type: String  
    },
    duration: String,
    destination: String,
    imageUrl: String
})

const Trips = mongoose.model('trips', tripSchema)

module.exports = Trips