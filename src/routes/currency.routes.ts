import { Router } from "express";
import { createcurrency,getallcurrency,getbycode } from "../controllers/currency.controllers";

const currency_router = Router();


currency_router.get("/all",getallcurrency);
currency_router.post("/create",createcurrency);
currency_router.post("/bycode",getbycode);

export default currency_router