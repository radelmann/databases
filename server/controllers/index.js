var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('controllers messages get');

      models.messages.get(req, function(results) {
        res.status(200).end(JSON.stringify(results));
      });

    }, // a function which handles a get request for all messages
    post: function(req, res) {

        console.log('controllers messages post');

        models.messages.post(req, function(results) {
          res.status(200).end();
        });

      } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      console.log('controllers users get');

      models.users.get(req, function(results) {
        res.status(200).end(JSON.stringify(results));
      });
    },

    post: function(req, res) {
      console.log('controllers users post');

      models.users.post(req, function(results) {
        res.status(200).end();
      });
    }
  }
};
