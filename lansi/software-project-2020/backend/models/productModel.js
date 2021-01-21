const mongoose = require('mongoose');


// model feild 
var productModel = mongoose.model('products',{
    
    name : String,
    email : String,
    password :String,
    isAdmin:{ type: Boolean, default: false}
   


});

module.exports = { productModel };