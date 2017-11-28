'use strict';

var mongoose = require('mongoose'),
    Users = mongoose.model('Users')

exports.users = function(req,res) {
    Users.find({}, function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
};

exports.adduser = function(req, res) {
    var new_user = new User(req.name, req.username, req.userpwd, req.regno, req.email, req.phone);
    new_user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.showuser = function(req, res) {
    User.findById(req.params.userId,function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.updateuser = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.name, req.username, req.userpwd, req.regno, req.email, req.phone, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };

  exports.removeuser = function(req, res) {
      User.remove({
        _id: req.params.userId
      }, function(err, user) {
        if (err)
          res.send(err);
        res.json({ message: 'User successfully deleted' });
      });
    };