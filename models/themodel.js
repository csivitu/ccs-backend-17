var mongoose = require ("mongoose");
var bcrypt   = require('bcrypt-nodejs');

var User = new mongoose.Schema({
    _Id: {type:String, required:true},
    name: {type:String, required:true},
    userpwd: {type:String, required:true},
    regno: {type:String, required:true},
    email: {type:String, required:true},
    phone: Number,
    questions: Array
});

var Question = new mongoose.Schema({
    _Id: {type:String, required:true},
    hint: {type:String, required:true},
    category: {type:String, required:true},
    body: {type:String, required:true}
});

var Answered = new mongoose.Schema({
    userId: {type:String, required:true},
    questionId: {type:String, required:true},
    answer: {type:String, required:true}
});


mongoose.model('Questions', Question);
mongoose.model('Answered', Answered);

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.userpwd);
};

mongoose.model('Users', User);