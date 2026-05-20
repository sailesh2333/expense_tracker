// import {users} from "../models/users";

// // create user 
// export const createuserservices =async (data:any)=>{
        
//     const existinguser =await users.findOne({
//             where:{
//                 email:data.email
//             }
//         });
//         if (existinguser){
//             throw new Error("User already exists with this email");
//         };
//            const user = await users.create(data);
//               return user;
//             };
// // get all users
// export const getallusersservices = async()=>{
//     return await users.findAll();
// }

// // get user by id 

// export const getbyidservices = async(mail:any)=>{
//     console.log("Entered")
//     const user  = await users.findOne({
//         where: {email:mail}
//     });
//     console.log(user)
//     return user;
// }   

// update user 

// export const updateuserbyidservices = async(id:string,data:any)=>{

//   await users.update(data,{
//     where:{id}
//   });
//   const updateduser = await users.findByPk(id);
//   return updateduser;
// }


// // delete user by email

// export const deletebyemailservices = async(email:string)=>{
//        return await users.destroy({
//         where:{email}});

// }
    

