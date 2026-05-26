import { accounts } from "../models/account";
import { categories } from "../models/categories";
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
    const account = await accounts.findOne({
      where:{
        id:data.account_id,
        users_id:data.users_id
      }
    });
    if(!account){
      throw new Error("account not found")
    };
    const currentBalance = Number(account.balance_amount);

    if(data.transaction_type === "expense"){
      account.balance_amount = currentBalance - data.amount
    };

    if(data.transaction_type === "income"){
        account.balance_amount = currentBalance + data.amount
    };

    await account.save();
  const Transaction = await transactions.create(data);
     return Transaction;
}

export const getTransaction = async(userID:any)=>{
    const trans =  await transactions.findAll({
  attributes: [
    "id",
    "amount",
    "description",
    "transaction_type",
  ],
   where:{
    users_id :userID
   },
  include: [
    {
      model: accounts,
      attributes: ["name"],
      as: "account",
    },
    {
      model: categories,
      attributes: ["name"],
      as: "category",
    },
  ],
});
    return trans;
}


export const updateTransaction = async(transactionID:string,data:any,userID:string)=>{
  const findoldtransaction = await transactions.findOne({
    where:{
      id:transactionID,
      users_id:userID
    }
  })  

  if(!findoldtransaction){
    throw new Error("tranaction not found");
  }
   
  const findaccount = await accounts.findOne({
    where:{
      id: findoldtransaction.account_id,
      users_id:userID
    }
  });

    if(!findaccount){
      throw new Error("account not found");
    };

    let accountBalance =Number( findaccount.balance_amount);

      if (findoldtransaction.transaction_type === "expense") {
        accountBalance =  accountBalance + Number(findoldtransaction.amount);
    } else {
        accountBalance -= Number(findoldtransaction.amount);
    };

     const newAmount = data.amount;
     const newtype = data.transaction_type; 

     if (newtype === "expense"){
          accountBalance = accountBalance - Number(newAmount);
     }else {
         accountBalance = accountBalance + Number(newAmount);
     };

     findaccount.balance_amount = accountBalance;
      await findaccount.save();
       await findoldtransaction.update({
         amount: newAmount,
         transaction_type: newtype,
         description:
             data.description ?? findoldtransaction.description
     });

    return findoldtransaction;

}

export const deleteTransaction = async(transactionID:string,userID:string)=>{
       const findoldtransaction = await transactions.findOne({
        where : {
          id:transactionID,
          users_id:userID
        }
       });

       const account = await accounts.findOne({
        where:{
          id:findoldtransaction?.account_id,
          users_id:userID
        },
       });
        
       let Balance = Number(account?.balance_amount);

       if (findoldtransaction?.transaction_type === "expense"){
            Balance = Balance + Number(findoldtransaction.amount)
       }else{
        Balance = Balance - Number(findoldtransaction?.amount);
       };

        if (account) {
          account.balance_amount = Balance
          await account.save()
        }
      
    const del = await transactions.destroy({
        where:{id:transactionID,
            users_id:userID
        },
    });
    return del;
};