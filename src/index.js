// require('dotenv').config()
// import mongoose from "mongoose";
// import { db_name } from './constants'
import dotenv from 'dotenv'
dotenv.config({
    path : './env'
})

import connectDB from "./db/index.js";

connectDB()


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