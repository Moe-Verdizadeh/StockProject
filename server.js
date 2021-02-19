const express = require('express');
// const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const expressLayouts =  require("express-ejs-layouts");  

const indexRouter = require('./routes/index');  

// const mongoURL = 'mongodb+srv://mokode:TeddyMo3@twitterdb.bcxkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// mongoose.connect(mongoURL , {
//     useNewUrlParser: true,
//     // useUnifiedTopology: true
// }); 

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is Connected!'); 
// })

app.use(morgan('tiny')); 


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

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
 
app.listen(process.env.PORT || 8000);