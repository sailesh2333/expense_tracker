import { transactions } from "../models/transaction";


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
        attributes:['amount','transaction_type','description'],
        where:{users_id:userID}
    });
    return trans;
}
