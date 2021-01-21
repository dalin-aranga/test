var mongoose = require('mongoose');

var userModel = mongoose.model('users',{
    name : {type :String},
    email : {type :String},
    password :{type: String},
    isAdmin:{ type: Boolean, default: false}
   


});
module.exports = { userModel };