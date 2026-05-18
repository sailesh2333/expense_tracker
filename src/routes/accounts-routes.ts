import { Router } from "express";
import { createAccountsController } from "../controllers/accounts-controllers";
import { authmiddleware } from "../middleware/auth-middleware";

const accounts_router = Router();

accounts_router.post("/create",authmiddleware,createAccountsController);

export default accounts_router