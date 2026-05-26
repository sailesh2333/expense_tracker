import { Router } from "express";
import { createCategorisController , getNameCategorieController,updateCategoriesController,DeleteCategoriesController} from "../controllers/categories-controllers";
import { authmiddleware } from "../middleware/auth-middleware";
import { deleteAccountController } from "../controllers/accounts-controllers";
import { deletecategories } from "../services/categories-services";

const categories_router = Router()

categories_router.post("/create",authmiddleware,createCategorisController);
categories_router.get("/",authmiddleware,getNameCategorieController);
categories_router.patch("/update",authmiddleware,updateCategoriesController);
categories_router.delete("/delete",authmiddleware,DeleteCategoriesController);

export default categories_router;