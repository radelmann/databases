var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: "root",
  password: "pass1234",
  database: "chat"
});

connection.connect(function(err) {
  if (err) thow(err);
});

module.exports = connection;