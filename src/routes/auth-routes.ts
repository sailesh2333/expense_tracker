import router from "express";
import { login,register,updatePassword } from "../controllers/auth-controller";


const authRouter = router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.patch('/password',updatePassword);
export default authRouter;