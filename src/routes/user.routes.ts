import { Router } from "express";
import{userbyid,updateuser,getalluser,createuser,deleteuser}from "../controllers/users.controllers"

const router = Router();


router.post("/createuser",createuser);

router.get("/all",getalluser);

router.post("/byid",userbyid);

router.put("/update",updateuser);

router.delete("/delete",deleteuser);


// router.delete("/", (req, res) => {
//     console.log("DELETE WORKING");
//     res.send("delete route working");
// });


export default router;