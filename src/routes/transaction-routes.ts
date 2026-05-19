import { Router } from "express";
import { authmiddleware } from "../middleware/auth-middleware";
import { createTransactionController,getTransactionController } from "../controllers/transaction-controllers";

const transaction_route = Router();

transaction_route.post("/create",authmiddleware,createTransactionController)
transaction_route.get("/name",authmiddleware,getTransactionController)
export default transaction_route
