import { Router } from "express";
import { create_accounts } from "../controllers/accounts.controllers";


const accounts_router = Router();

accounts_router.post("/create",create_accounts);

export default accounts_router