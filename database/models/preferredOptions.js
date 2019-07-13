const db = require('../config.js');


exports.preferredActivity = () => {

    let getPreferredActivity = 'SELECT * FROM `PreferredActivity`';
    return getPreferredActivity;
}


exports.preferredDish = () => {

    let getPreferredDish = 'SELECT * FROM `PreferredDish`';
    return getPreferredDish;
}

exports.preferredStayMode = () => {

    let getPreferredStayMode = 'SELECT * FROM `StayMode`';
    return getPreferredStayMode;
}

exports.preferredLocalTransitMode = () => {

    let getPreferredLocalTransitMode = 'SELECT * FROM `LocalTransitMode`';
    return getPreferredLocalTransitMode;
}

exports.preferredPersonalities = () => {

    let getPreferredPersonalities = 'SELECT * FROM `Personalities`';
    return getPreferredPersonalities;
}

exports.getCountry = () => {

    let getAllCountry = 'SELECT * FROM `Country` ORDER BY `Country`.`Name` ASC';
    return getAllCountry;

}

exports.getCities = () => {

    let getAllCities = 'SELECT * FROM `City` ORDER BY `City`.`Name` ASC';
    return getAllCities;

}

exports.getAllCitiesOfCountry = (data) => {

    let allCitiesOfCountry = `SELECT * FROM City WHERE 
    CountryCode = '${data.CountryCode}' ORDER BY CountryCode ASC`;
    return allCitiesOfCountry
}

exports.getSpecificCities = (data) => {

    let getAllFellatingCites = ` SELECT * FROM City  WHERE  
    Name LIKE '%${data.target}%' ORDER BY City.Name ASC `;
    return getAllFellatingCites;
}

//*******// insert the selected Options //*******//

exports.insertPreferredActivityOptions = (data, callback) => {

    let preferredActivity = data.preferredActivity;
    let userId = data.userId;
    var res = [];

    for (var i = 0; i < preferredActivity.length; i++) {
        let arr = [];
        arr.push(null, userId, preferredActivity[i]);
        res.push(arr);
    }


    var selectedActivity = `
        INSERT INTO PreferredActivityOptions(id, id_Account, id_PreferredActivity)
        VALUES ? `;

    db.query(selectedActivity, [res], (err, result) => {
        if (err) {
            console.log("Error during run database", err)
            callback(err, null)
        } else {
            callback(null, result);

        }
    })

}

exports.insertPreferredLocalTransitMode = (data, callback) => {
    let preferredLocalTransitMode = data.preferredLocalTransitMode;
    let userId = data.userId;
    var values = [];

    for (var i = 0; i < preferredLocalTransitMode.length; i++) {
        let arr = [];
        arr.push(null, userId, preferredLocalTransitMode[i]);
        values.push(arr);
    }

    let selectedLocalTransit = `
        INSERT INTO LocalTransitOptions(id, id_Account, id_LocalTransitMode) VALUES ? `;

    db.query(selectedLocalTransit, [values], (err, result) => {
        if (err) {
            console.log("Error during run database", err)
            callback(err, null)
        } else {
            callback(null, result);

        }

    })
}

exports.insertPreferredStayMode = (data, callback) => {

    let preferredStayMode = data.preferredStayMode;
    let userId = data.userId;
    var values = [];

    for (let index = 0; index < preferredStayMode.length; index++) {
        const element = preferredStayMode[index];
        let arr = [];
        arr.push(null, userId, element);
        values.push(arr);
    }

    let selectedStayMode = `
        INSERT INTO StayOptions(id, id_Account, id_StayMode) VALUES ? `;


    db.query(selectedStayMode, [values], (err, result) => {
        if (err) {
            console.log("Error during run database", err)
            callback(err, null)
        } else {
            callback(null, result);
        }
    })

}

exports.insertPreferredPersonalities = (data) => {

    let preferredPersonalities = data.preferredPersonalities;
    let userId = data.userId;
    let selectedPersonalities = `
        UPDATE Account SET id_Personalities = ${
            preferredPersonalities
        }
        WHERE Account.id = ${
            userId
        };
        `;
    return selectedPersonalities;
}

exports.insertDepartingCity = (data) => {

    let userId = data.userId;
    let departingCity_id = data.departingCity_id;
    let selectedDepartingCity = `
        UPDATE Account SET DepartingCity_id = ${
            departingCity_id
        }
        WHERE Account.id = ${
            userId
        };
        `;
    return selectedDepartingCity;
}