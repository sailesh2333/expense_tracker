import { transactions } from "../models/transaction";
import { users } from "../models/users";


interface createTrasactionInput {
    users_id:string,
    category_id:string,
    account_id:string,
    currency_id:string,
    amount:number,
    transaction_type:"expense"|"income",
    description:string 
}

export const createTransaction =async(data:createTrasactionInput)=>{
     const Transaction = await transactions.create(data);
     return Transaction;
}

export const getTransaction = async(userID:any)=>{
    const trans = await transactions.findAll({
        attributes:['id','amount','transaction_type','description'],
        where:{users_id:userID}
    });
    return trans;
}

export const updateTransaction = async(transactionID:string,data:any,userID:string)=>{
    const update = await transactions.update(data,{
        where:{
             id:transactionID,
             users_id:userID      
        }
    });
    return update;
}

export const deleteTransaction = async(transactionID:string,userID:string)=>{
    const del = await transactions.destroy({
        where:{id:transactionID,
            users_id:userID
        },
    });
    return del;
}