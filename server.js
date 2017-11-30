var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./models/themodel'), //created model loading here
bodyParser = require('body-parser');

// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://csi_admin:acoolpassword@ds123896.mlab.com:23896/ccs-csi'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/theroutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);