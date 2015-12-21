var db = require('../db');
var dbConnection = require('../db/index.js');

module.exports = {
  messages: {
    get: function(req, callback) {
      console.log('models messages get');

      var sql = 'SELECT DISTINCT messages.*, rooms.name as room_name, users.name as user_name \
              FROM messages \
              JOIN users on messages.user_id = users.id \
              JOIN rooms on messages.room_id = rooms.id;';

      dbConnection.query(sql, function(err, results) {
        if (err) {
          console.log(err);
        }

        callback(results);
      });

    }, // a function which produces all the messages

    post: function(req, callback) {
        console.log('models messages post');

        console.log(req.body);

        var params = [req.body.message, req.body.room_id, req.body.user_id];
        var sql = 'INSERT INTO `messages` (`message`, `room_id`, `user_id`) VALUES (?,?,?)';

        dbConnection.query(sql, params, function(err, results) {
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
