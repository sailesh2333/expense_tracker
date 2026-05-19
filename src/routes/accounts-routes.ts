import { Router } from "express";
import { createAccountsController,getAccountController } from "../controllers/accounts-controllers";
import { authmiddleware } from "../middleware/auth-middleware";

const accounts_router = Router();

accounts_router.post("/create",authmiddleware,createAccountsController);
accounts_router.get("/name",authmiddleware,getAccountController)

export default accounts_router