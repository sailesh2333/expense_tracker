import { HostNotFoundError } from "sequelize";
import { sequelize } from "./config/database";
import "./models/users"
import { users } from "./models/users";
// db connection
// sequelize.authenticate()
//          .then(()=>console.log("db connected sucessfully"))
//          .catch((error)=>console.error("db not connected "))


//  async function user_table() {
//    await sequelize.sync();    
//    console.log("user_table created");
//  }
//  user_table()




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
// startserver()
