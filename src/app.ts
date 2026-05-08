import express from "express";
import router from "./routes/user.routes"
import currency_router from "./routes/currency.routes";

const app = express();

app.use(express.json());

app.use("/api/users",router);

app.use("/currency",currency_router)

// app.get("/api",(req,res)=>{
//     res.send("api is running");
// });

export default app;
