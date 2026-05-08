import { currency } from "../models/currency";

export const createcurrencyservicesvices = async (data:any)=>{
    const existingcurrency = await currency. findOne({where:{code:data.code}});
    if (existingcurrency){
        throw new Error("currency already existing");
    };
    const createuser = await currency.create(data);
    return createuser;
};
export const getbyinrservices = async (inr:any)=>{
    const currencycode= await currency.findOne({where:{code:inr}});
    return currencycode
};
export const getallservices=async()=>{
    return await currency.findAll()
};
