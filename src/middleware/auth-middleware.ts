import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";


interface jwtpayload{
    id:string,
    email:string
}
export interface authrequest extends Request{
    user?:jwtpayload;
}

export const authmiddleware = async (req:Request,res:Response,next : NextFunction)=>{
    try {
        console.log(JSON.stringify(req.header));
        const authheader = req.headers.authorization;
        
       if (!authheader){
        return res.status(401).json({message:"token missing"});
       }
       const token = authheader.split(' ')[1];

       const decode = jwt.verify(token,process.env.JWT_SECRET!);

       (req as any).user = decode
       next();

    } catch (err:any) {
        res.status(400).json({
            message:err.message
        })
        
    }

}

console.log("middleware is running")