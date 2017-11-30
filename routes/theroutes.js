'use strict';
module.exports = function(app) {
  var dacontroller = require('../controllers/thecontroller');

  // dacontroller Routes
  app.route('/users')
    .get(dacontroller.users)
    .post(dacontroller.adduser);


  app.route('/users/:userId')
    .get(dacontroller.showuser)
    .put(dacontroller.updateuser)
    .delete(dacontroller.removeuser);



  app.get('/', function(req, res) {
      res.send('Hello! The API is at http://localhost:3000');
   });

  app.route('/questions/:category')
   .get(dacontroller.questions)
   .post(dacontroller.addquestion);
  
  app.route('/questions/:questionId')
   .get(dacontroller.showquestion)
   .put(dacontroller.updatequestion)
   .delete(dacontroller.removequestion);
   
  app.get('/login', function(req, res){
    res.render('login.html', { message: req.flash('Login')});
  });

  app.get('/logout', function(req, res){
    res.render('logout.html', { message: req.flash('Login')});
  });

  app.get('/signup', function(req, res){
    res.render('signup.html', { message: req.flash('Login')});
  });

   
};