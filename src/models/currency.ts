import { DataTypes,Model,Optional, UUIDV4 } from "sequelize";
import { sequelize } from "../config/database";

interface currency_attributes{
    id:string;
    code:string;
    symbol:string;
    country_name:string;
}

interface currency_creation_attributes extends Optional<currency_attributes,"id">{}
export class currency extends Model<currency_attributes,currency_creation_attributes>
implements currency_attributes {
 public id!:string;
 public code!:string;
 public symbol!: string;
 public country_name!: string;
}


currency.init({
    id :{
        type:DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey:true
    },
    code:{
        type:DataTypes.CHAR(3),
        allowNull:false
    },
    symbol:{
        type:DataTypes.STRING(8),
        allowNull:false
    },
    country_name:{
        type:DataTypes.STRING(100),
        allowNull:false
    }

},{sequelize,tableName:"currency",timestamps:false})