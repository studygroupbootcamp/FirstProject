const mysql = require('mysql')


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    user: "root",

    // Enter your db password here
    password: "Jakeybear5",

    database: "project"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

  module.exports = connection