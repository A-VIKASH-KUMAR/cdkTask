const express=require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv =require('dotenv')
// const process = require ('process')
dotenv.config()
// console.log(process.env)
mongoose.connect('process.env.DB_CONNECT',() => console.log('DB is connected'))
console.log(process)
const authRoute = require('./routes/auth');

app.listen(3000,() =>console.log('Server is up and running'));
app.use('/api/user' , authRoute);
