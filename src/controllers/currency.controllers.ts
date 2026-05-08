import { Request,Response } from "express";
import { createcurrencyservicesvices,getallservices,getbyinrservices } from "../services/currency.services";

export const createcurrency =async(req:Request,res:Response)=>{
    try {
        const inr = await createcurrencyservicesvices(
            req.body
        );

        res.status(202).json({
            message:"currency created sucessfully"
        })
        
    } catch (err:any) {
        res.status(404).json({
            message:err.message
        })
        
    }
}

export const getallcurrency =async(req:Request,res:Response)=>{
    try {
        const getallcode =await getallservices();
         console.log(getallcode)
        res.status(200).json(getallcode)

    } catch (err:any) {
        res.status(404).json({
            message:err.message
        })
        
    }
}

export const getbycode =async(req:Request,res:Response)=>{
    try {
        const {code} = req.body;
        const currency = await getbyinrservices(code);

        console.log(code);
        if (!currency){
            return res.status(404).json({
                message:"code not found"
            })
        }

        return res.status(200).json(currency)

    } catch (err:any) {
        res.status(404).json({
            message:err.message
        })
        
    }
}