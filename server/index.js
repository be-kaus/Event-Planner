import dotenv from 'dotenv'
dotenv.config();

import express from "express";
import morgan from 'morgan';
import cors from "cors";
import connectDB from './src/config/db.js';
import AuthRouter from "./src/routes/authRoutes.js";
import UserRouter from "./src/routes/userRoutes.js";
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from "cloudinary";


const app = express();

app.use(cors({origin: "http://localhost:5173", credentials: true }))

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/user",UserRouter)

app.get("/",(req,res)=>{
    req.json({message:"server connected"});

});

app.use((error,req,res,next) => {
    const errorMessage = error.message || "Internal Server Error"
    const errorCode = error.statusCode || 500
    res.status(errorCode).json({message:errorMessage})
})

const port =process.env.PORT ||5000;
app.listen(port,async ()=>{
    console.log("server started at",port);

    // try{
    //     await connectDB();
    //     await 
    // }
});