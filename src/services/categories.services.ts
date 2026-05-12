import { categories } from "../models/categories";
import { users } from "../models/users";


export const  createcategoriesservices = async (data:any)=>{
          
         const userexist = await users.findByPk(data.user_id);

         if (!userexist){
            throw new Error("user not found");
         }
         console.log(userexist);

         const createcategory = await categories.create(data);
         return createcategory;

};