import mongoose from "mongoose";

const connectDB =async ()=>{
    try {
      const conn =await mongoose.connect(process.env.MONGO_URI)
      console.log("MongoDB Connected at", conn.connection.host);
    } catch (error) {
      console.log("Error connecting DB", error);
      process.exit(1);
    }
};

export default connectDB;