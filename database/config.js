const mongoose = require('mongoose');

// const db = mysql.createConnection({
//     host: "db4free.net",
//     user: "trift_user",
//     password: "trift2019",
//     database: "trift_db"
// })

// connect the database 
// db.connect((err, res) => {
//     if (err) throw err;
//     console.log('====================================');
//     console.log('Database has been connected ...');
//     console.log('====================================');

// });
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/trift_db' || 'mongodb://utki:123456a@ds151817.mlab.com:51817/trift_db', { useNewUrlParser: true });