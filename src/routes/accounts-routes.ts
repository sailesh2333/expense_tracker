import { Router } from "express";
import { createAccountsController,getAccountController,updateAccountController,deleteAccountController} from "../controllers/accounts-controllers";
import { authmiddleware } from "../middleware/auth-middleware";

const accounts_router = Router();

accounts_router.post("/create",authmiddleware,createAccountsController);
accounts_router.get("/",authmiddleware,getAccountController);
// accounts_router.put("/updateName",authmiddleware,updateAccountNameController);
// accounts_router.put("/updateBalance",authmiddleware,updateAccountBalanceController);
accounts_router.patch("/update",authmiddleware,updateAccountController);
accounts_router.delete("/delete",authmiddleware,deleteAccountController)

export default accounts_router