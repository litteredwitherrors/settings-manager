'use strict';

var bodyParser = require('body-parser');
var Setting    = require('../models/Setting.js');

module.exports = function(router) {
  router.use(bodyParser.json());
  router.get('/settings', function(req, res) {
    console.log('Index router');
    Setting.find({}, function(err, data) {
      if (err) {
        console.log(err);
      }
      return res.json(data);
    });
  });

  router.post('/settings', function(req, res) {
    console.log('You hit the post')
    var newSetting = new Setting(req.body);
    console.log(req.body);
    newSetting.save({}, function(err, data) {
      if (err){
        errorResponse(err, res);
        return;
      }
      res.json(data);
    });
  });

  router.put('/settings/:id', function (req, res) {
    console.log('Hit update route');
    var updatedSetting = req.body;
    delete updatedSetting._id;

    Setting.update({'_id': req.params.id}, updatedSetting, function (err, data) {
      console.log(req.body);
      if (err) {
        errorResponse(err, res);
        return;
      }
      res.json({msg: 'updated successfully'});
    });
  });

  router.delete('/settings/:id', function(req, res) {
    console.log('You hit delete');
    Setting.remove({'_id': req.params.id}, function(err, data) {
      if (err) {
        errorResponse(err, res);
        return;
      }
      res.json({msg: "It's as if a million souls were screaming out in terror and were suddenly silenced"})
    });
  });
};
