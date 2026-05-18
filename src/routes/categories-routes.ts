import { Router } from "express";
import { createCategorisController } from "../controllers/categories-controllers";
import { authmiddleware } from "../middleware/auth-middleware";

const categories_router = Router()

categories_router.post("/create",authmiddleware,createCategorisController);

export default categories_router;