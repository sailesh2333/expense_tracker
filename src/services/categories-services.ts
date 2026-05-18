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





// export const  createcategoriesservices = async (data:any)=>{
          
//          const userexist = await users.findByPk(data.user_id);

//          if (!userexist){
//             throw new Error("user not found");
//          }
//          console.log(userexist);

//          const createcategory = await categories.create(data);
//          return createcategory;

// };