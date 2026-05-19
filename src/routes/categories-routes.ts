import { Router } from "express";
import { createCategorisController , getNameCategorieController} from "../controllers/categories-controllers";
import { authmiddleware } from "../middleware/auth-middleware";

const categories_router = Router()

categories_router.post("/create",authmiddleware,createCategorisController);
categories_router.get("/name",authmiddleware,getNameCategorieController)

export default categories_router;