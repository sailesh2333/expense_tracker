import { Router } from "express";
import { authmiddleware } from "../middleware/auth-middleware";
import { createTransactionController,getTransactionController,updateTransactionController,deleteTransactionController } from "../controllers/transaction-controllers";

const transaction_route = Router();

transaction_route.post("/create",authmiddleware,createTransactionController);
transaction_route.get("/name",authmiddleware,getTransactionController);
transaction_route.patch("/update",authmiddleware,updateTransactionController);
transaction_route.delete("/delete",authmiddleware,deleteTransactionController);
export default transaction_route;
