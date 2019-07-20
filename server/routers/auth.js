const express = require("express");
const router = express.Router();
// const db = require('../../database/index.js');
const Account = require('../../database/models/auth');
const Cities = require('../../database/models/city')
const bcrypt = require('bcryptjs');

router.get("/test", (req, res) => res.send(" auth  is working"));

router.post("/signup", (req, res) => {
  console.log(req.body, 'Initiating Sign Up')
  Account.emailExists(req.body)
    .then(user => {
      console.log(user)
      if (user !== null) {
        return res.send(404);
      } else {
        
    /* ------- Hashing Password ---------- */
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
          if (err) {
            res.status(400).json({
              signup: "Invalid password",
              error: "Your password is invalid"
            });
          }
          req.body.password = hashedPassword;
          /* ----------- Add New User to Database ---------- */
          Account.authSignup(req.body).then(user => {
            if (user) {
              res.sendStatus(200)                             // New User Created
            } else {
              res.sendStatus(403)                             // Forbidden. In case new User is not saved
            }
          }).catch(e => {
            res.send(e);                                      // Invalid Input or Database malfunction
          })
        })
    })
  }
})
})

router.post("/login", (req, res) => {

  Account.login(req.body)
    .then(fullUser => {
      if (fullUser !== undefined || fullUser !== null) {
        bcrypt.compare(req.body.password, fullUser.password).then((match) => {
          if (match) {
            let user = Object.assign(fullUser, {password: undefined});
            res.send(user);
          } else {
            return res.status(404).send({
              email: 'Your Email or password is incorrect',
              success: false,
              message: "You had inserted incorrect email or password"
            })
          }
        })
      } else {
        return res.status(404).send({
          email: 'Your Email was not found',
          success: false,
          message: "You had inserted incorrect email"
        });
      }
    }).catch(e => {
      return res.status(404).send({
        email: 'Your Email was not found',
        success: false,
        message: "You had inserted incorrect email"
      });
    })
});

router.post('/emailexists', (req, res) => {
  Account.emailExists(req.body)
    .then(user => {
      if(user === undefined || user === null) {
        res.send(false);
      } else {
        res.send(true);
      }
    })
})

router.get('/cities', (req, res) => {
  Cities.find({})
    .then(cities => {
      res.send(cities)
    })
})

module.exports = router;

// new Promise((resolve, reject) => {

  //   db.executeQuery(query.isEmailExist(req.body), (err, response) => {
  //     if (err) {
  //       console.log('Error during  hit the server');
  //       reject(err);
  //     } else {
  //       resolve(response);
  //     }
  //   })
  // }).then((response) => {
  //   if (response.length === 0) {
  //     bcrypt.genSalt(10, (err, salt) => {
  //       bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
  //         if (err) {
  //           res.status(400).json({
  //             signup: "invalid password",
  //             error: "Your password is invalid"
  //           });
  //         }
  //         req.body.password = hashedPassword;
  //         db.executeQuery(query.authSignup(req.body), (err, response) => {
  //           if (err) {
  //             console.log('Error during  hit the server');
  //             throw err;
  //           }
  //           res.status(200).send({
  //             userId: response.insertId,
  //             email: req.body.email,
  //             success: true,
  //             message: "You have signup successfully"
  //           });
  //         });
  //       });
  //     });
  //   } else {
  //     res.send({
  //       email: 'Your Email Already Exist',
  //       success: false
  //     })
  //   }
  // }).catch((err) => {
  //   res.status(400).send({
  //     error: "Error during the server"
  //   })
  // });