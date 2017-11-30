var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./models/themodel'), //created model loading here
bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://csi_admin:acoolpassword@ds123896.mlab.com:23896/ccs-csi'); 

 require('./config/passport')(passport); 

 app.use(morgan('dev')); // log every request to the console
 app.use(cookieParser()); // read cookies (needed for auth)
 app.use(bodyParser()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



var routes = require('./routes/theroutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);