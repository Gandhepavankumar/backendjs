import mongoose from "mongoose";
import express from 'express';
import { db } from '../constants.js';

const app = express();

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${db}`);
        console.log("Db connected");
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    }catch(error){
        console.error("Db connection error", error);
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB;