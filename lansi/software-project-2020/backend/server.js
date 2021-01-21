const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
import routerProduct from './routes/productRoute';
import routerUser from './routes/userRoute';


// call database
mongoose.connect('mongodb://localhost:27017/gentshouse1',{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err)
    console.log('MongoDB connection Success.......!');
    else
        console.log('Error In DB connection : ' + JSON.stringify(err,undefined,2));
    });

    
// convert json format
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


//  run server node port 
app.listen(3000, () => { console.log("Server started at http://localhost:3000") });

// port cors 
app.use(cors({ origin:'http://localhost:3000'}));





// path of product 
app.use("/products",routerProduct);

// path of user
app.use("/users",routerUser);



