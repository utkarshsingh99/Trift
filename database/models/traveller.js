const db = require('../config.js');

exports.insertPlaceOfResidence = (data) => {

    let userId = data.userId;
    let residentCounty_id = data.residentCounty_id;
    let selectedResidence = `UPDATE Account  SET residentCounty_id  = '${residentCounty_id}' WHERE Account.id  = ${userId};`;
    return selectedResidence;
}

exports.insertHomeTown = (data) => {

    let userId = data.userId;
    let homeTown_id = data.HomeTown_id;
    let selectedHomeTown = `UPDATE Account  SET HomeTown_id  = ${homeTown_id} WHERE Account.id  = ${userId};`;
    return selectedHomeTown;

}

exports.insertFavoritePlaces = (data, callback) => {
    let FavoritePlaces = data.FavoritePlaces;
    let userId = data.userId;
    var values = [];

    for (var i = 0; i < FavoritePlaces.length; i++) {
        let arr = [];
        arr.push(null, userId, FavoritePlaces[i]);
        values.push(arr);
    }

    let selectedFavoritePlaces = `INSERT INTO FavoritePlaces  (id , id_Account , City_id ) VALUES ?;`;

    db.query(selectedFavoritePlaces, [values], (err, result) => {
        if (err) {
            console.log("Error during run database", err)
            callback(err, null)
        } else {
            callback(null, result);

        }

    })
}

exports.insertTravailedPlaces = (data, callback) => {

    let TravailedPlaces = data.TravailedPlaces;
    let userId = data.userId;
    var values = [];

    for (var i = 0; i < TravailedPlaces.length; i++) {
        let arr = [];
        arr.push(null, userId, TravailedPlaces[i]);
        values.push(arr);
    }

    let selectedTravailedPlaces = `INSERT INTO TravailedPlaces  (id , id_Account , City_id ) VALUES ?;`;

    db.query(selectedTravailedPlaces, [values], (err, result) => {
        if (err) {
            console.log("Error during run database", err)
            callback(err, null)
        } else {
            callback(null, result);

        }

    })
}