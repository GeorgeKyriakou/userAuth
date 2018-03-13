const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const http = require('http');
const config = require('./config/database');
const app = express();
const port = 5005;

//DECLARE ROUTES
const USER =require('./routes/user');

/********ENABLE MIDDLEWARE*********/
app.use(cors());
app.use(bodyParser.json());

/**************DB*****************/
mongoose.connect(config.database)
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database '+ config.database)
});
mongoose.connection.on('error', (err)=>{
  console.error(err);
});

/*************PASSPORT*************/
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


/***********ROUTES*****************/
app.get('/',(req,res)=>{res.redirect('/home')});
app.use('/user', USER);

/**********START SERVER**********/
app.listen(port, ()=>{
    console.log('Listening on', port);
});
