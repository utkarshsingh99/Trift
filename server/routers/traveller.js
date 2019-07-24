const express = require("express");
const router = express.Router();

const query = require('../../database/models/traveller')
const db = require('../../database/index.js');

const Trips = require('../../database/models/trips')
const Partners = require('../../database/models/partners')
const Cities = require('../../database/models/city')
const Countries = require('../../database/models/country')

router.get('/experience', (req, res) => {
    Trips.find({}).sort({_id: -1}).limit(6).then(trips => {
        res.send(trips)
    })
})

router.get('/cities', (req, res) => {
    Cities.find({}, {"CountryCode": 1, "Name": 1}).then(cities => {
            res.send(cities)
        })
})

router.get('/countries', (req, res) => {
    Countries.find({}, {"Code": 1, "Name": 1, "Continent": 1, "Region": 1}).then(countries => {
        res.send(countries)
    })
})

router.get('/partners', (req, res) => {
    Partners.find().then(partners => {
        res.send(partners)
    })
})

router.post("/insertAllTravellerInfo", (req, res) => {

    const placeOfResidence = new Promise((resolve, reject) => {
        db.executeQuery(query.insertPlaceOfResidence(req.body), (err, response) => {
            if (err) {
                console.log('Error during hit the server', err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    })

    const homeTown = new Promise((resolve, reject) => {
        db.executeQuery(query.insertHomeTown(req.body), (err, response) => {
            if (err) {
                console.log('Error during  hit the server', err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    })

    const favoritePlaces = new Promise((resolve, reject) => {
        query.insertFavoritePlaces(req.body, (err, response) => {
            if (err) {
                console.log('Error during  hit the server', err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    })

    const travailedPlaces = new Promise((resolve, reject) => {
        query.insertTravailedPlaces(req.body, (err, response) => {
            if (err) {
                console.log('Error during  hit the server', err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    })

    Promise.all([placeOfResidence, homeTown, favoritePlaces, travailedPlaces]).then((response) => {
        res.send({
            success: true,
            message: "Your info has been saved",
            data: response
        })
    }).catch((err) => {
        res.status(400).send({
            succes: false,
            message: "Error during the server",
            Error: err
        })
    })
})

module.exports = router;