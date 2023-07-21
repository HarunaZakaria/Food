const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://harunzy55:0545771497%40Hr@cluster0.eeh0ev4.mongodb.net/mern-food';


mongoose.connect(mongoURL, {useunifiedtopology:true, useNewUrlParser:true});

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('mongo Database connected succesful');
});

db.on('error', ()=>{
    console.log('mondgodb connection failed');
});

module.exports = mongoose
