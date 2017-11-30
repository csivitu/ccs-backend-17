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

var Question = new mongoose.Schema({
    _Id: String,
    hint: String,
    category: String,
    body: String
});

var Answered = new mongoose.Schema({
    userId: String,
    questionId: String,
    answer: String
});

mongoose.model('Users', User);
mongoose.model('Questions', Question);
mongoose.model('Answered', Answered)
