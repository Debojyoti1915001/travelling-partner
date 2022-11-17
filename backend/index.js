const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session')
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
app.use(cors());
dotenv.config({path: './src/.env'});
require('./src/db/connection')
app.use(express.json())
// app.use(express.static('public'))
app.use(cookieParser())
// using dotenv module for environment
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(
    session({
        secret: process.env.TOKEN_KEY,
        resave: true,
        saveUninitialized: true,
    })
)

app.use(require('./src/routes/account'))
app.use(require('./src/routes/admin'))
app.use(require('./src/routes/worker'))
const middleware = (req,res, next) =>{
    console.log("Hello middleware")
    next();
}

app.use(cookieParser())
app.get('/', middleware, (req, res) =>{
    res.send("hello");
});

app.listen(process.env.PORT, ()=> {
    console.log(`Server started on port: ${process.env.PORT}`)
})

//  const User= require('./src/models/user')
// const databasedlt= async()=>{
//    const user = await User.find({email:"debojyoti76@gmail.com"})
//    user.forEach(async(data)=>{
//         await User.findByIdAndDelete(data._id)
//    })
//    console.log("deleted")
// }
// databasedlt()