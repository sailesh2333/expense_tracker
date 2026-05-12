import { accounts } from "../models/account";

export const create_acccounts_services = async(data:any)=>{
      
       const create_accounts = await accounts.create(data)
       return create_accounts;
}