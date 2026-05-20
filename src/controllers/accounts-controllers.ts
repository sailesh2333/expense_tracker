import { Request,Response } from "express";
import { createAcccounts,accountName,updateAccountService,deleteAccount} from "../services/accounts-services";
import { authrequest } from "../middleware/auth-middleware";
import { currency } from "../models/currency";

// create account 

export const createAccountsController = async(req:authrequest,res:Response)=>{
  try { 
        const {name,account_type,balance_amount} = req.body;
        
        if (!name||!account_type|| balance_amount === undefined){
          return res.status(400).json({
            message : "all fields are requried "
          });
        }
        if (typeof balance_amount != "number"){
          res.status(400).json({
            message:"balance amount should be number"
          })
        }
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

};

// get account 
export const getAccountController = async(req:authrequest,res:Response)=>{
  try {
    const getAccountName = await accountName((req.user?.id)as string);
    
    res.status(201).json({
      getAccountName
    })
  } catch (err:any) {
    res.status(401).json({
      message:err.message
    })
  }
};

// update account
export const updateAccountController = async (req: authrequest,res: Response)=>{

  try {
    const {id,name,balance_amount } = req.body;
    if(!id){
      return res.status(400).json({
        message:"account id is requried"
      });
    };
    
    if (name === undefined && balance_amount === undefined){
      return res.status(400).json({
        message:"atleast one field is required to update"
      });
    };

    if (balance_amount !== undefined && typeof balance_amount !== "number"){
      return res.status(400).json({
        message:"balance amount should be number"
      });
    };

   const updateData = await updateAccountService(id,{name,balance_amount,},req.user?.id as string);
   
   

   return res.status(200).json({
      message: "Account updated successfully",
    });

  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// delete account 
export const deleteAccountController = async(req:authrequest,res:Response)=>{

try {
     const {id} = req.body;

     if (!id) {
      return res.status(400).json({
        message: "Account id is required",
      });
    };

     const deleteData = await deleteAccount(id,(req.user?.id)as string);

      if (deleteData === 0) {
      return res.status(404).json({
        message: "Account not found",
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
