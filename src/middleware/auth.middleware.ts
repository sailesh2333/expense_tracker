import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface authrequest extends Request{
    user?:any;
}

export const authenticatetoken = (req:authrequest,res:Response,next:NextFunction)=>{

    const authheader = req.headers.authorization;
    const token = authheader && authheader.split('')[1];


    if(!token){
        return res.sendStatus(401).json({
            message:"invalid"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();})
}