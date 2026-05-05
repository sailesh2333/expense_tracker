import { HostNotFoundError } from "sequelize";
import { sequelize } from "./config/database";
import "./models/users"
import "./models/currency"
import { users } from "./models/users";
import { currency } from "./models/currency";
// db connection
// sequelize.authenticate()
//          .then(()=>console.log("db connected sucessfully"))
//          .catch((error)=>console.error("db not connected "))


//  async function user_table() {
//    await sequelize.sync();    
//    console.log("user_table created");
//  }
//   user_table()




// async function startserver(){
//      try{
//         await sequelize.sync();
//         console.log("database connected");

//         const user =await users.create({
//         name:"sailesh",
//         email:"sailesh@gmail.com",
//            password:"sailesh23"});

//            console.log("data inserted",user.toJSON())

//      }catch(err){
//       console.error("error in server",err)
//      }

// }

// async function deleteuser(name:string) {
// try{
//     await sequelize.sync();
//     console.log("database connected");
//     const deluser = await users.destroy({where:{name:name}}) 
//     if (deluser===0){
//         console.log("user name not found");
//     }
//     else{
//         console.log("user deleted",deluser)
//     }

// }catch(err){console.error(err,"error in server")}    
// }

// deleteuser("sailesh");
// startserver()
