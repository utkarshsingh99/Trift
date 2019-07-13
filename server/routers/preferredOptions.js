const express = require('express');
const router = express.Router();
const query = require('../../database/models/preferredOptions');
const db = require('../../database/index.js');


router.get("/test", (req, res) => res.send(" preferredOptions  is working"));



router.get("/basicPersona", (req, res) => {
  console.log(req.body)
  const getPreferredActivity = new Promise((resolve, reject) => {
    db.executeQuery(query.preferredActivity(), (err, response) => {
      if (err) {
        console.log('Error during  hit the server', err);
        reject(err);
      } else {
        let data = {};
        data['path'] = "PreferredActivity";
        data['Question'] = "Preferred Mode of Activities";
        data['Options'] = response;
        resolve(data);
      }
    });
  })

  const getPreferredStayMode = new Promise((resolve, reject) => {
    db.executeQuery(query.preferredStayMode(), (err, response) => {
      if (err) {
        console.log('Error during  hit the server', err);
        reject(err);
      } else {
        let data = {};
        data['path'] = "PreferredStayMode";
        data['Question'] = "Where would you like to stay?";
        data['Options'] = response;
        resolve(data);
      }
    });
  })

  const getPreferredLocalTransitMode = new Promise((resolve, reject) => {
    db.executeQuery(query.preferredLocalTransitMode(), (err, response) => {
      if (err) {
        console.log('Error during  hit the server', err);
        reject(err);
      } else {
        let data = {};
        data['path'] = "PreferredLocalTransitMode";
        data['Question'] = "Preferred Mode of Local Transit";
        data['Options'] = response;
        resolve(data);
      }
    });
  })

  const getPreferredPersonalities = new Promise((resolve, reject) => {
    db.executeQuery(query.preferredPersonalities(), (err, response) => {
      if (err) {
        console.log('Error during  hit the server', err);
        reject(err);
      } else {
        let data = {};
        data['path'] = "PreferredPersonalities";
        data['Question'] = "Choose your Personality";
        data['Options'] = response;
        resolve(data);
      }
    });
  })

  Promise.all([getPreferredStayMode, getPreferredActivity, getPreferredLocalTransitMode, getPreferredPersonalities])
    .then((response) => {
      res.status(200).send({
        success: true,
        message: "You get all the basic persona options",
        data: response
      });
    }).catch((err) => {
      res.status(400).send({
        error: "Error during the server",
        success: false
      });
    })
});
router.get("/country", (req, res) => {
  db.executeQuery(query.getCountry(), (err, response) => {
    if (err) {
      console.log('Error during  hit the server');
      throw err;
    }
    res.status(200).send({
      data: response,
      success: true,
      message: "You get the country already"
    });
  });
});

router.get("/cities", (req, res) => {
  db.executeQuery(query.getCities(), (err, response) => {
    if (err) {
      console.log('Error during  hit the server');
      throw err;
    }
    res.status(200).send({
      data: response,
      success: true,
      message: "You get the cities already"
    });
  });
});

router.post("/specificCities", (req, res) => {
  console.log(req.body)
  db.executeQuery(query.getSpecificCities(req.body), (err, response) => {
    if (err) {
      res.status(400).send({
        success: false,
        message: "Your do not get the cities",
        Error: err
      })
    } else {
      res.status(200).send({
        success: true,
        message: "You get all the filtering cities ",
        data: response
      });
    }
  });
});

router.post("/citiesOfCountry", (req, res) => {
  db.executeQuery(query.getAllCitiesOfCountry(req.body), (err, response) => {
    if (err) {
      res.status(400).send({
        success: false,
        message: "You do not get All the City of this Country",
        data: response
      })
    } else {
      res.status(200).send({
        success: true,
        message: "You Get all Cites of this Country",
        data: response
      })
    }
  });
});

router.post("/insertDepartingCity", (req, res) => {
  console.log(req.body)
  db.executeQuery(query.insertDepartingCity(req.body), (err, response) => {
    if (err) {
      console.log('Error during  hit the server');
      throw err;
    }
    res.status(200).send({
      data: response,
      success: true,
      message: "Your Departing City has been saved"
    });
  })
})

router.post("/submitBasicPersona", (req, res) => {
  console.log(req.body);
  const insertPreferredActivity = new Promise((resolve, reject) => {
    query.insertPreferredActivityOptions(req.body, (err, response) => {
      if (err) {
        console.log('Error during  hit the server');
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

  const insertPreferredStayMode = new Promise((resolve, reject) => {
    query.insertPreferredStayMode(req.body, (err, response) => {
      if (err) {
        console.log('Error during  hit the server');
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

  const insertPreferredLocalTransitMode = new Promise((resolve, reject) => {
    query.insertPreferredLocalTransitMode(req.body, (err, response) => {
      if (err) {
        console.log('Error during  hit the server');
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

  const insertPreferredPersonalities = new Promise((resolve, reject) => {
    db.executeQuery(query.insertPreferredPersonalities(req.body), (err, response) => {
      if (err) {
        console.log('Error during  hit the server');
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

  Promise.all([insertPreferredActivity, insertPreferredLocalTransitMode, insertPreferredStayMode, insertPreferredPersonalities]).then((response) => {
    res.status(200).send({
      success: true,
      message: "Your options has been saved",
      data: response
    });
  }).catch((err) => {
    res.status(400).send({
      error: "Error during the server",
      success: false
    })
  });

});

module.exports = router;