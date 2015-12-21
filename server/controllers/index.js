var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('controllers messages get');

      models.messages.get(req, function(results) {

        var resultsObj = {
          results: results
        };

        res.status(200).end(JSON.stringify(resultsObj));
      });

    }, 
    post: function(req, res) {

        console.log('controllers messages post');

        models.messages.post(req, function(results) {
          res.status(200).end();
        });

      } 
  },

  users: {
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
