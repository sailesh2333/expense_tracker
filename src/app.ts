import express from "express";
// import router from "./routes/user.routes"
import currency_router from "./routes/currency-routes";
import categories_router from "./routes/categories-routes";
import accounts_router from "./routes/accounts-routes";
import auth_router from "./routes/auth-routes";
import transaction_route from "./routes/transaction-routes";

const app = express();

app.use(express.json());

// app.use("/api/users",router);

app.use("/currency",currency_router);

app.use ("/categories",categories_router);

app.use ("/accounts" ,accounts_router);

app.use("/auth", auth_router);

app.use("/transaction",transaction_route);


export default app;
