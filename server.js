const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const expressLayouts =  require("express-ejs-layouts");  


const indexRouter = require('./routes/index');  

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(morgan('tiny')); 

app.use(expressLayouts);
app.use(express.static('public'));
 
app.use('/', indexRouter);
app.use('/about', indexRouter);

app.get('/api', (req,res) => {
    const data = {
        userName: 'moe',
        age: 5
    }
    res.json(data);
});
app.get('/api/name', (req,res) => {
    const data = {
        userName: 'mohammad',
        age: 55
    }
    res.json(data);
});
 
app.listen(process.env.PORT || 8000);