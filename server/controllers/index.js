var models = require('../models');
var dbConnection = require('../db/index.js');

module.exports = {
  messages: {
    get: function(req, res) {

        console.log('messages get');

        var sql = 'select * from `messages`';

        console.log(sql);

        var queryArgs = [];
        dbConnection.query(sql, function(err, results) {

          if (err) {
            console.log(err);
          }

          console.log(results);

          res.status(200).end(JSON.stringify(results));
        });

    }, // a function which handles a get request for all messages
    post: function(req, res) {

        console.log('messages post');

        var sql = 'INSERT INTO `messages` (`message`, `room_id`, `user_id`) ';
        sql += ' VALUES ("' + req.body.message + '","' + req.body.room_id + '","' + req.body.user_id + '")'; 

        console.log(sql);

        var queryArgs = [];
        dbConnection.query(sql, function(err, results) {

          if (err) {
            console.log(err);
          }

          //dbConnection.end();
          res.status(200).end();
        });

      } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {

    },

    post: function(req, res) {

      console.log('users post');

      var sql = 'INSERT INTO `users` (`name`) VALUE ("' + req.body.username + '")';

      console.log(sql);

      var queryArgs = [];

      dbConnection.query(sql, function(err, results) {
        if (err) {
          console.log(err);
        }

        //dbConnection.end();
        res.status(200).end();
      });
    }
  }
};