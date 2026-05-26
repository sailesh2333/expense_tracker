import { Response } from "express";
import { createCategory,getAllCategory,updateCategories,deletecategories } from "../services/categories-services";
import { authrequest } from "../middleware/auth-middleware";
import { categories } from "../models/categories";
    
// create category
export const createCategorisController = async(req:authrequest,res:Response)=>{
try {
    const {name,type,describe} = req.body;

    if (!name || !type  ||!describe){
      return res.status(400).json({
        message:"name , type , describe are requeried"
      })
    }
    
    const color = type === "income" ? "green" :"red";

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
};

//get category

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

// update category name 

export const updateCategoriesController = async(req:authrequest,res:Response)=>{
  try {
        const {id,name,type,describe} = req.body;
        
        if(!id){
          return res.status(400).json({
            message:"accountid is requried"
          });
        };

        if(name === undefined && type === undefined && type === undefined && describe === undefined){
          return res.status(400).json({
            message:"all fields are requeried"
          });
        };
        
        const categorie = await updateCategories(id,{name,type,describe},(req.user?.id)as string);
        res.status(201).json({
          message:`categories updated successfully`,
        });
  } catch (err:any) {
    res.status(404).json({
      message:err.message
    })

  }
}

// delete category

export const DeleteCategoriesController = async(req:authrequest,res:Response)=>{
try {
     const {id} = req.body;

     if (!id) {
      return res.status(400).json({
        message: "category id is required",
      });
    }
     const deleteData = await deletecategories(id,(req.user?.id)as string);

        if (deleteData === 0) {
      return res.status(404).json({
        message: "category not found",
      });
    }

     return res.status(200).json({
      message:"deleted successfully"
     })
      

  
} catch (err:any) {
  res.status(400).json({
    message:err.message
  })

}
}
