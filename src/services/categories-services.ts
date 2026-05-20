import { categories } from "../models/categories";
import { users } from "../models/users";

interface createCategorisInput {
   name:string,
   type:"income"|"expense",
   color:string,
   describe:string,
   users_id : string
} 
   
export const createCategory = async( data:createCategorisInput)=>{
    const category = await categories.create(data);
    return category;
}

// show category name 
export const getAllCategory = async(userID:any)=>{
    const categorie = await categories.findAll({
        attributes:['name','id','type','describe'],
        where:{users_id:userID}
    })
    return categorie;
}

// update categories name 

export const updateCategories = async(categoryID:string,updateData:any,userID:string)=>{
const categoryName = await categories.update(updateData,{
    where:{
        id:categoryID,
        users_id:userID
    }
});
return categoryName;
}

export const deletecategories = async(categoryID:string,userID:string)=>{
    const category = await categories.destroy({
        where:{
            id:categoryID,
            users_id:userID
        },
    });
    return category;
    
}

