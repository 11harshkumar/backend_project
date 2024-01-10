// require('dotenv').config()
// import mongoose from "mongoose";
// import { db_name } from './constants'
import dotenv from 'dotenv'
import app from './app.js';
dotenv.config({
    path : './env'
})

import connectDB from "./db/index.js";
// import { DB_NAME } from './constants.js'
// console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)

//async methods returns promises with them
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000), () => {
        console.log(`server is running at PORT : ${process.env.PORT}`)
    }
})
    .catch((err) => {
    console.log("MONGODB CONNECTION FAILED",err)
})

/*
import express from 'express'
const app = express()

// console.log(db_name)
// using IFEE to connnect the mongodb database 

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`) 
        app.on("ERROR",(error) => {
            console.log("Express is not able to listen database", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
        throw err
    }
})()
*/