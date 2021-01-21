import express from 'express';
var {userModel} = require('../models/userModel');
var routerUser = express.Router();


routerUser.post('/user',(req,res)=>{
    var newuser = new User({
        name  :req.body.name,
        email : req.body.email,
        password : req.body.password,
        
    });
    newuser.save((err,docs));
});





routerUser.get('/',(req,res)=>{
    console.log("FInish")
    req.find((err,docs)=>{
        if(!err){
            console.log("FInish")
            req.send(docs);
            console.log("FInish")
        }
        else{ console.log('Errore in Retriving Customer: ');}

    });

});
export default routerUser;