import { Router } from "express";
import{userbyid,updateuser,getalluser,createuser,deleteuser}from "../controllers/users.controllers"

const router = Router();


router.post("/createuser",createuser);

router.get("/",getalluser);

router.get("/:id",userbyid);

router.put("/:id",updateuser);

router.delete("/",deleteuser);

// router.delete("/", (req, res) => {
//     console.log("DELETE WORKING");
//     res.send("delete route working");
// });


export default router;