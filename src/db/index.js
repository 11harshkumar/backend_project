import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
// console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)

const connectDB = async () => { 
    try {
        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        // console.log(`\n MONGO_DB Connected !! DB HOST: ${connectionInstance.connection.host}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error",error)
        throw error
    }
} 
export default connectDB

