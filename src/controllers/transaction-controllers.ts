import { Response } from "express";
import { createTransaction,getTransaction } from "../services/transaction.services";
import { authrequest } from "../middleware/auth-middleware";
import { currency } from "../models/currency";
import { accounts } from "../models/account";
import { categories } from "../models/categories";



export const createTransactionController = async(req:authrequest,res:Response)=>{
   try {
        const {amount,transaction_type,description,accountName,categoryName} = req.body;
        const currencyINR = await currency.findOne({
            where:{code:"INR"}
        }) 
        const accountID = await accounts.findOne({
            where:{users_id:req.user?.id,
                name:accountName
            },
        })
        const categoryID = await categories.findOne({
            where:{users_id:req.user?.id,
                name:categoryName
            }
        })
        
        const transaction = await createTransaction({
            transaction_type,
            amount,
            description,
            currency_id: (currencyINR?.id) as string,
            users_id:(req.user?.id) as string,
            account_id:(accountID?.id) as string,
            category_id:(categoryID?.id) as string
        }) 

        res.status(200).json({
            message:"transaction created",
            transaction
        })
           
   } catch (err:any) {
    res.status(404).json({
        message:err.message
    })
   }
   
}


export const getTransactionController = async(req:authrequest,res:Response)=>{
    try {
        const gettrans = await getTransaction(req.user?.id);
        
        res.status(200).json({
            gettrans
        })
        
    } catch (err:any) {
        res.status(404).json({
            message:err.message
        })
    }
}