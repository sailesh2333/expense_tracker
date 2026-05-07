import { Request,Response } from "express";
import { createuserservices,getallusersservices,getbyidservices,updateuserbyidservices,deletebyemailservices } from "../services/users.services";


// createuser
export const createuser = async(req:Request,res:Response)=>{
    try {
        
         const user = await createuserservices(
            req.body
         );

         res.status(202).json({
            message:"user created sucessfully",
            data:user
         })

    } catch (err:any) {
        res.status(400).json({
            message: err.message
        })

    }
}

export const getalluser = async(req:Request,res:Response)=>{

  try {
    const users =await getallusersservices();
    res.status(200).json(users);
    
  } catch (err:any) {
    res.status(500).json({
        message:err.message
    })
    
  }


}

export const userbyid = async(req:Request,res:Response)=>{
    const {id} = req.body
    // console.log("ID",id);
     try {
    const user = await getbyidservices(id);
    return res.status(200).json(user)
  } catch (err:any) {
    res.status(500).json({
        message:err.message
    })
    
  }
}

export const updateuser = async(req:Request,res:Response)=>{
       try {
           const {id} = req.body
        const user = await updateuserbyidservices(
            id,
            req.body
        ) 

        res.status(200).json({
            message:"users updated sucessfully",
            data:user
        });

  } catch (err:any) {
    res.status(500).json({
        message:err.message
    })
    
  }
}



export const deleteuser = async (req: Request, res: Response) => {
    console.log("delete api")
    try {
        const { email } = req.body;
        console.log(email)
        const deleted = await deletebyemailservices(email);

        if (deleted === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: " deleted successfully"
        });

    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};