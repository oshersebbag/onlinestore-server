const mongoose = require('mongoose');
const config = require('./config/enviroment/index');

mongoose.connect(config.db, {useNewUrlParser: true});
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>{
    console.log('connected to my DB');
});