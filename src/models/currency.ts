import { DataType,DataTypes,Model } from "sequelize";
import { sequelize } from "../config/database";

export class currency extends Model {}

currency.init({
    id :{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey:true
    },
    code:{
        type:DataTypes.STRING(3),
        allowNull:false
    },
    symbol:{
        type:DataTypes.STRING(1),
        allowNull:false
    },
    country_name:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{sequelize,tableName:"currency",timestamps:true})