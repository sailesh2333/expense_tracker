import { accounts } from "../models/account";
import { currency } from "../models/currency";

interface createAccountsInput{
       name:string,
       currency_id:string,
       account_type:"expense"|"income",
       users_id:string,
       balance_amount:number
}

export const createAcccounts = async(data:createAccountsInput)=>{
       const create_accounts = await accounts.create(data)
       return create_accounts;
}

export const accountName =async(userID:any)=>{
       const getAccount = await accounts.findAll({
           attributes:['name','balance_amount'],
           where:{users_id:userID}   
       })
       return getAccount
}