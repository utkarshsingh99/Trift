const express = require("express");
const router = express.Router();
const query = require('../../database/models/creator');
const db = require('../../database/index.js');


router.get("/test", (req, res) => res.send(" creator  is working"));

router.get("/typeOfTrip", (req, res) => {

    const getTypeOfTrip = new Promise((resolve, reject) => {
        db.executeQuery(query.TypeOfTrip(), (err, response) => {
            if (err) {
                console.log('Error during  hit the server', err);
                reject(err);
            } else {
                let data = {};
                data["path"] = "AllTypeOfTrip";
                data["Options"] = response;
                resolve(data);
            }
        })
    }).then((response) => {
        res.status(200).send({
            success: true,
            message: "You get all the options for typeOfTrip",
            data: response
        })
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: "Error during the server",
            Error: err
        });
    });
});

router.post("/insertAllCreatorInfo", (req, res) => {
    const placeOfResidence = new Promise((resolve, reject) => {
        db.executeQuery(query.insertPlaceOfResidence(req.body), (err, response) => {
            if (err) {
                console.log('Error during  hit the server', err);
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

    const typeOfTrip = new Promise((resolve, reject) => {
        query.insertTypeOfTrip(req.body, (err, response) => {
            if (err) {
                console.log('Error during  hit the server', err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    })


    Promise.all([placeOfResidence, homeTown, favoritePlaces, travailedPlaces, typeOfTrip]).then((response) => {
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

router.post("/insertAllSocialUrl", (req, res) => {
    db.executeQuery(query.insertSocialMedia(req.body), (err, response) => {
        if (err) {
            console.log("Error during the server", err);
            res.send({
                success: false,
                message: "Your social accounts has not been saved",
                Error: err,
                data: null,
            })
        } else {
            res.status(200).send({
                success: true,
                message: "All your social account has been saved",
                data: response
            })
        }
    })
})

module.exports = router;