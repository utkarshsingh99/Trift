const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database/index');
const path = require('path');

require('../database/config')

const Images = require('../database/models/images')

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve('./public')))

// bodyParser MiddleWare
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Routes
const traveller = require('./routers/traveller');
const creator = require('./routers/creator');
const preferredOptions = require('./routers/preferredOptions');
const auth = require('./routers/auth');
const payment = require('./routers/payment');


app.get("/", (req, res) => {
    res.send('it is working ...');
})

app.get('/images', (req, res) => {
    Images.find({})
        .then(images => {
            res.send(images)
        })
})

// use routes
app.use("/api", traveller);
app.use("/api", creator);
app.use("/api", preferredOptions);
app.use("/api/auth", auth);
app.use("/api", payment);


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on port ${port}`));