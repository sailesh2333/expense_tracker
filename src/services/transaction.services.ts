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


//  create transaction
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

// get Transactions 
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

// update tranaction 
export const updateTransaction = async (transactionID: string,data: any,userID: string) => {
  const findoldtransaction = await transactions.findOne({
      where: {
        id: transactionID,
        users_id: userID,
      },
    });

  if (!findoldtransaction) {
    throw new Error(
      "transaction not found"
    );
  }

  const oldAccount =await accounts.findOne({
      where: {
        id: findoldtransaction.account_id,
        users_id: userID,
      },
    });

  if (!oldAccount) {
    throw new Error(
      "old account not found"
    );
  }

  let oldBalance = Number(oldAccount.balance_amount);

  if (findoldtransaction.transaction_type ==="expense" ){
    oldBalance += Number(findoldtransaction.amount);
  } else {
    oldBalance -= Number(findoldtransaction.amount);
  }

  oldAccount.balance_amount =oldBalance;

  await oldAccount.save();

  /* FIND NEW ACCOUNT */
  const newAccount =await accounts.findOne({
      where: {
        users_id: userID,
        name: data.accountName,
      },
    });

  if (!newAccount) {
    throw new Error(
      "new account not found"
    );
  }

  const newCategory = await categories.findOne({
      where: {
        users_id: userID,
        name: data.categoryName,
      },
    });

  if (!newCategory) {
    throw new Error(
      "category not found"
    );
  }

  let newBalance = Number(newAccount.balance_amount);

  if (data.transaction_type ==="expense") {
    newBalance -= Number(
      data.amount
    );
  } else {
    newBalance += Number(
      data.amount
    );
  }

  newAccount.balance_amount = newBalance;
  await newAccount.save();

  await findoldtransaction.update({
    amount: data.amount,
    transaction_type:data.transaction_type,
    description:data.description,
    account_id: newAccount.id,
    category_id: newCategory.id,
  });

  return findoldtransaction;
};

// delete transaction 
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