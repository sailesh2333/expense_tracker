import { Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.db_name as string,
    process.env.db_user as string,
    process.env.db_pass as string,
    {
        host:process.env.db_host,
        dialect:"postgres",
    }
)