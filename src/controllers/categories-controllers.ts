import { Response } from "express";
import { createCategory,getAllCategory } from "../services/categories-services";
import { authrequest } from "../middleware/auth-middleware";
    
export const createCategorisController = async(req:authrequest,res:Response)=>{
try {
    const {name,type,color,describe} = req.body;

    const Category = await createCategory({
      name,
      type,
      color,
      describe,
      users_id: (req.user?.id) as string
    });

    return res.status(201).json({
      message:"categorie created",
      Category
    });
} catch (err:any) {
  res.status(400).json({
    message:err.message
  })
  
}
}
export const getNameCategorieController = async(req:authrequest,res:Response)=>{
  try {

    const getcategory = await getAllCategory(req.user?.id)
    
    return res.status(201).json({
      getcategory
    })
    
  } catch (err:any) {
    res.status(404).json({
      message:err.message
    })
  }

}
      
 