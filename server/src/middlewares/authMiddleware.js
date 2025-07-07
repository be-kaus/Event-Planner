import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect =async (req, res, next) => {
    const token = req.cookies.IDCard || "";
    console.log(token)

    if(!token){
        const error = new Error("Unauthorised!! Login Again")
        error.statusCode = 401;
        return next(error);
    };

    const decode = await jwt.verify(tokem, process.env.JWT_SECRET);

    const verifiedUser = await User.findbyID(decode.ID);

    if(!verifiedUser){
        const error = new Error("Unauthorised!! Login Again")
        error.statusCode = 401;
        return next(error);
    };

    
};