import { Request,Response } from "express";
import { create_acccounts_services } from "../services/accounts.services";


export const create_accounts = async(req:Request,res:Response) =>{
  try { 
        const accounts = create_acccounts_services(req.body);

        res.status(201).json({
            message : "account created sucessfully",
            accounts
        });
      

  }
  catch(err:any){
    res.status(404).json({
        message : err.message
    })
  }

}