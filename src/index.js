// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js"
dotenv.config({
  path: './env'
});
//second apporch
connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("SERVER IS RUNING AT PORT")
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED",err)
})



//first apporch to connect database

// (async()=>{
//         try{
//           await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//           app.on("error",(error)=>{
//             console.log("ERRR",error);
//             throw error;
//           });

//           app.listen(process.env.PORT,()=>{
//             console.log("APP LISTENING ON PORT",process.env.PORT);
//           });
//         }catch(error){

//             console.error("ERROR: ",error);
//             throw err;
//         }
// })()