const db = require('../database/config');

const executeQuery = (sqlQuery, callback) => {

  db.query(sqlQuery, (err, result) => {
    if (err) {
      callback(err, null);
      console.log('====================================');
      console.log('Error durning execute the query ... ', err);
      console.log('====================================');
    } else {
      callback(null, result);
    }
  })

}



module.exports.executeQuery = executeQuery;