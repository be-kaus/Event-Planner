import dotenv from 'dotenv'
dotenv.config();

import express from "express";
import connectDB from './src/config/db.js';
import AuthRouter from "./src/routes/authRoutes.js";

const app=express();

app.use(express.json());

app.use("/auth", AuthRouter);

app.get("/",(req,res)=>{
    req.json({message:"server connected"});

});

app.use((error,req,res,next) => {
    const errorMessage = error.message || "Internal Server Error"
    const errorCode = error.statusCode || 500
    res.status(errorCode).json({message:errorMessage})
})

const port =process.env.PORT ||5000;
app.listen(port,()=>{
    console.log("server started at",port);
    connectDB();
});