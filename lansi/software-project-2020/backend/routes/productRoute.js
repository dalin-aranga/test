import express from 'express';
var {productModel} = require('../models/productModel');
var routerProduct = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;




//get request 
routerProduct.get('/product',(req,res)=>{
    productModel.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Product : '+JSON.stringify(err,undefined,2));}
    });

});


//get filtering by id 
routerProduct.get('/product/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('Not valid ID ');

    productModel.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Not matching in this ID : '+JSON.stringify(err,undefined,2));}
    });
})


routerProduct.post('/product',(req,res)=>{
    var newProduct = new productModel({
        name  : req.body.name,
        email : req.body.email,
        password : req.body.password,
        isAdmin : req.body.isAdmin,
    });
    newProduct.save((err,docs)=>{
        
        if(!err){res.send(docs);} 
        else{console.log('Errore in Save  Product  : '+JSON.stringify(err,undefined,2));}
        
    });
});


routerProduct.put('/product/:id',(req,res)=>{
    
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('Not valid ID ');
    
    var newProduct = new productModel({
        _id : String(req.params.id),
        name  : req.body.name,
        email : req.body.email,
        password : req.body.password,
        isAdmin : req.body.isAdmin,
    });
   
    productModel.findByIdAndUpdate(req.params.id,{$set:newProduct},{new:true},(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Update : '+JSON.stringify(err,undefined,2));}
    });

});

routerProduct.delete('/product/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('Not valid ID ');
    
    productModel.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete  : '+JSON.stringify(err,undefined,2));}
    });
});

export default routerProduct;