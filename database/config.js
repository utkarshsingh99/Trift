const mysql = require('mysql');

const db = mysql.createConnection({
    host: "db4free.net",
    user: "trift_user",
    password: "trift2019",
    database: "trift_db"
})

// connect the database 
db.connect((err, res) => {
    if (err) throw err;
    console.log('====================================');
    console.log('Database has been connected ...');
    console.log('====================================');

});


module.exports = db;