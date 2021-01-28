var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '',
  port     : '3306',
  user     : 'root',
  password : 'gCpPC@2021',
  database : 'eCommerce'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;
