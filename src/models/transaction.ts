import { DataTypes,Model } from "sequelize";
import { sequelize } from "../config/database";

class transaction extends Model{}
// table creation 
transaction.init({
    id :{
        type: DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true},
    user_id:{
        type:DataTypes.BIGINT,
    },    
    category_id:{
        type: DataTypes.BIGINT
    },
    account_id:{
        type: DataTypes.BIGINT
    },
    currency_id:{
        type:DataTypes.BIGINT
    },
    amount:{
        type:DataTypes.BIGINT
    },
    type:{
       type:DataTypes.STRING
    }


},
{
    sequelize,
    tableName:"transaction",
    timestamps:false
})