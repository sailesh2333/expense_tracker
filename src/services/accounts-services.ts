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

export const accountName =async(userID:string)=>{
       const getAccount = await accounts.findAll({
           attributes:['name','balance_amount','id'],
           where:{users_id:userID}   
       })
       return getAccount
}


export const updateAccountService = async (accountId:string,updateData:any,userId:string) => {

  return await accounts.update(updateData,{ where: {    
        id: accountId,
        users_id: userId,
      },
    }
  );
};

export const deleteAccount = async (accountID:string,userID:string)=>{
      const account = await accounts.destroy({
       where:{
              id:accountID,
              users_id:userID
       },
      });
      return account;
};










// // update account name 
// export const renameAccount = async(accountreName:string,accountName:string,user_id:string)=>{
//        const accountRename = await accounts.update({
//               name:accountreName
//               },{
//               where:{
//                      name:accountName,
//                      users_id:user_id
//               }
//               })
//               return accountRename
// }

// // update account balance 
// export const rebalanceAccount = async(accountName:string,balance:number,user_id:string)=>{
//        const accountRebalance  = await accounts.update({
//               balance_amount :balance 
//               },{
//               where:{
//                      name:accountName,
//                      users_id:user_id
//               }
//               })
//               return accountRebalance 
// }


