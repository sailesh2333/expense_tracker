import { DataType,Model } from "sequelize";
import { sequelize } from "../config/database";

export class categories extends Model{}

categories.init({},{sequelize,tableName:"cate"})