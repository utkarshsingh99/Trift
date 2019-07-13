const express = require("express");
const router = express.Router();
const db = require('../../database/index');
const query = require('../../database/models/payment');
const bcrypt = require('bcryptjs');

router.post("/insertPaymentInfo", (req, res) => {
   console.log(req.body);
  db.executeQuery(query.insertPaymentInfo(req.body), (err, response) => {
    if (err) {
      console.log("Error during the server", err);
      res.status(400).send({
        success: false,
        message: "Your payment information has not been saved",
        Error: err
      })
    } else {
      res.status(200).send({
        success: true,
        message: "Your payment information has been saved",
        response: response
      })
    }
  });
});

module.exports = router;