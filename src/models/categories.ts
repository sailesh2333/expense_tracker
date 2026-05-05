import { DataType,Model,Optional } from "sequelize";
import { sequelize } from "../config/database";

interface categories_attributes{
    id:string;
    name:string;
    user_id:string;
    type:string;
    color:string;
    describe:string
}


export class categories extends Model{}

categories.init({

},{sequelize,tableName:"cate"})