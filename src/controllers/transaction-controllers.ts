import { Response } from "express";
import { createTransaction,getTransaction,updateTransaction,deleteTransaction} from "../services/transaction.services";
import { authrequest } from "../middleware/auth-middleware";
import { currency } from "../models/currency";
import { accounts } from "../models/account";
import { categories } from "../models/categories";



export const createTransactionController = async(req:authrequest,res:Response)=>{
   try {
        const {amount,transaction_type,description,accountName,categoryName} = req.body;
            if (amount === undefined || !transaction_type || !accountName || !categoryName) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }
        
        const currencyINR = await currency.findOne({
            where:{code:"INR"}
        });

            if (typeof amount !== "number") {
      return res.status(400).json({
        message: "Amount must be a number",
      });
    }

        const accountID = await accounts.findOne({
            where:{users_id:req.user?.id,
                name:accountName
            },
        });
            if (!accountID) {
      return res.status(404).json({
        message: "Account not found",
      });
    }
        
        const categoryID = await categories.findOne({
            where:{users_id:req.user?.id,
                name:categoryName
            }
        });
            
        if (!categoryID) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

        
        const transaction = await createTransaction({
            transaction_type,
            amount,
            description,
            currency_id: (currencyINR?.id) as string,
            users_id:(req.user?.id) as string,
            account_id:(accountID?.id) as string,
            category_id:(categoryID?.id) as string
        }); 
   


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
        const gettransaction = await getTransaction(req.user?.id);
        
        res.status(200).json({
            gettransaction
        })
        
    } catch (err:any) {
        res.status(404).json({
            message:err.message
        });
    };
};

export const updateTransactionController = async(req:authrequest,res:Response)=>{
    try {
        const {id,amount,transaction_type,description,accountName,categoryName} = req.body;

        if (!id) {
      return res.status(400).json({
        message: "Transaction id is required",
      });
    };

    
    if (amount === undefined && transaction_type === undefined && description === undefined) {
      return res.status(400).json({
        message: "At least one field is required to update",
      });
    }

    if ( amount !== undefined && typeof amount !== "number"){
      return res.status(400).json({
        message: "Amount must be a number",
      });
    }
       

        const update = await updateTransaction(id,{amount,transaction_type,description,accountName,categoryName},(req.user?.id)as string);
        res.status(200).json({
            message:"trasaction updated sucessfully",
        });
    } catch (err:any) {
        res.status(401).json({
            message: err.message
        });
    };
};

export const deleteTransactionController = async(req:authrequest,res:Response)=>{
try {
     const {id} = req.body;

     if (!id) {
      return res.status(400).json({
        message: "transaction id is required",
      });
    }
    

     const deleteData = await deleteTransaction(id,(req.user?.id)as string);  
        if (deleteData === 0) {
      return res.status(404).json({
        message: "transaction not found",
      });
    }

     return res.status(200).json({
      message:"deleted successfully"
     })  
} catch (err:any) {
  res.status(400).json({
    message:err.message
  })

}

}