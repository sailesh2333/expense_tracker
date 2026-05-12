import { Router } from "express";
import { createCategory } from "../controllers/categories.controllers";

const categories_router = Router()

categories_router.post("/create",createCategory);

export default categories_router;