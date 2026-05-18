import { Request,Response } from "express";
import { createAcccounts } from "../services/accounts-services";
import { authrequest } from "../middleware/auth-middleware";
import { currency } from "../models/currency";


export const createAccountsController = async(req:authrequest,res:Response) =>{
  try { 
        const {name,account_type,balance_amount} = req.body;
        const currency_inr = await currency.findOne({
          where:{code:"INR"}
        })
        
        const accounts = await createAcccounts({
          users_id:(req.user?.id) as string, 
          name,
          currency_id : (currency_inr?.id)as string,
          account_type,
          balance_amount,
        });
        // console.log(accounts);

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