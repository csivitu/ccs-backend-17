'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/thecontroller');

  // todoList Routes
  app.route('/users')
    .get(todoList.users)
    .post(todoList.adduser);


  app.route('/users/:userId')
    .get(todoList.showuser)
    .put(todoList.updateuser)
    .delete(todoList.removeuser);



  app.get('/', function(req, res) {
      res.send('Hello! The API is at http://localhost:3000');
   });

   
};