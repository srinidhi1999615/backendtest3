require('dotenv').config();
const express=require('express');
const port=8000;
const bodyParser=require('body-parser');
const app =express();
const db=require('./config/mongoose');
const routes = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes);
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
    }else{
        console.log('Server is running successfully on port:',port);
    }
})