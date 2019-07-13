const express = require("express");
const router = express.Router();
const db = require('../../database/index.js');
const query = require('../../database/models/auth');
const bcrypt = require('bcryptjs');

router.get("/test", (req, res) => res.send(" auth  is working"));

router.post("/signup", (req, res) => {
  console.log(req.body)
  new Promise((resolve, reject) => {

    db.executeQuery(query.isEmailExist(req.body), (err, response) => {
      if (err) {
        console.log('Error during  hit the server');
        reject(err);
      } else {
        resolve(response);
      }
    })
  }).then((response) => {
    if (response.length === 0) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
          if (err) {
            res.status(400).json({
              signup: "invalid password",
              error: "Your password is invalid"
            });
          }
          req.body.password = hashedPassword;
          db.executeQuery(query.authSignup(req.body), (err, response) => {
            if (err) {
              console.log('Error during  hit the server');
              throw err;
            }
            res.status(200).send({
              userId: response.insertId,
              email: req.body.email,
              success: true,
              message: "You have signup successfully"
            });
          });
        });
      });
    } else {
      res.send({
        email: 'Your Email Already Exist',
        success: false
      })
    }
  }).catch((err) => {
    res.status(400).send({
      error: "Error during the server"
    })
  });
});


router.post("/login", (req, res) => {

  db.executeQuery(query.isEmailExist(req.body), (err, response) => {

    bcrypt.compare(req.body.password, response[0].password).then((match) => {
      let data = response[0];
      if (match) {
        res.status(200).send({
          userId: data.id,
          email: data.email,
          success: true,
          message: "You have login successfully"
        });
      } else {
        res.send({
          email: 'Your Email or password is incorrect',
          success: false,
          message: "You had insert incorrect email or password"
        })
      }
    });
  });
});

module.exports = router;