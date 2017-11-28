var mongoose = require ("mongoose");
var User = new mongoose.Schema({
    _Id: String,
    name: String,
    username: String,
    userpwd: String,
    regno: String,
    email: String,
    phone: Number
});

mongoose.model('Users', User);