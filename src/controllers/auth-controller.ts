import { Request,Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { users } from "../models/users";

export const register = async (req:Request,res:Response)=>{

    try {
           const {name,email,password} = req.body;

           const existinguser = await users.findOne({where:{email}});

           if (existinguser) {
            return res.status(400).json({message:"user already exixst"});
           }
           const hashedpassword = await bcrypt.hash(password,10);

           const user = await users.create({
            name,
            email,
            password: hashedpassword,
           })
            return res.status(201).json(user)

        
    } catch (err:any) {
        res.status(404).json({
            message: err.message
        })        
    }
};

 export const login = async (req:Request,res:Response)=>{

    try {
        const {email,password} = req.body;
        // console.log(email+" "+password)
        const user = await users.findOne({where:{email}});

        if(!user){
            return res.status(400).json({
                message:"invalid email"
            });
        }
        console.log("User Obtained");
        const validpass = await bcrypt.compare(password,user.password)
        console.log(validpass)
        if(!validpass){
            return res.status(400).json({
            message: " invalid password"    
            })
        };
        const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    res.json({status:200,message:"Login successful", token });
        
    } catch (err:any) {
        res.status(404).json({
            message:err.message
        })
    }

  } 