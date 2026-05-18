import { Router } from "express";
import { authmiddleware } from "../middleware/auth-middleware";
import { createTransactionController } from "../controllers/transaction-controllers";

const transaction_route = Router();

transaction_route.post("/create",authmiddleware,createTransactionController)

export default transaction_route
