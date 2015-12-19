var db = require('../db');
var dbConnection = require('../db/index.js');

module.exports = {
  messages: {
    get: function(req, callback) {
      console.log('models messages get');

      var sql = 'select * from messages';

      dbConnection.query(sql, function(err, results) {
        if (err) {
          console.log(err);
        }

        callback(results);
      });

    }, // a function which produces all the messages

    post: function(req, callback) {
        console.log('models messages post');

        //todo escape values
        var sql = 'INSERT INTO `messages` (`message`, `room_id`, `user_id`) ';
        sql += ' VALUES ("' + req.body.message + '","' + req.body.room_id + '","' + req.body.user_id + '")';

        dbConnection.query(sql, function(err, results) {
          if (err) {
            console.log(err);
          }

          callback(results);
        });
      } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(req, callback) {
      console.log('models users get');

      var sql = 'select * from users';

      dbConnection.query(sql, function(err, results) {
        if (err) {
          console.log(err);
        }

        callback(results);
      });
    },
    post: function(req, callback) {
      console.log('models users post');

      //todo - escape values
      var sql = 'INSERT INTO `users` (`name`) VALUE ("' + req.body.username + '")';

      dbConnection.query(sql, function(err, results) {
        if (err) {
          console.log(err);
        }

        callback();
      });
    }
  }
};
