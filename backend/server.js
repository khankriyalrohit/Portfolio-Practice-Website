import {app} from './app.js';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import cloudinary from 'cloudinary';

//Config File 
dotenv.config({"path": "./backend/config/config.env"});

//Databse Connection
connectDatabase();

//Cloudiary connect
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnning successfully on ${process.env.PORT}`);
})