import { DataTypes,Model,Optional, UUIDV4 } from "sequelize";
import { sequelize } from "../config/database";

interface transaction_attribute {
    id :string;
    user_id:string;
    category_id:string;
    account_id:string;
    currency_id:string;
    amount:number;
    transaction_type:string;
    description : Text;
    transaction_date:Date;
    created_at?:Date;
    deleted_at?:Date|null;
}

interface transaction_creation_attribute extends Optional<transaction_attribute,"id">{}

class transaction extends Model<transaction_attribute,transaction_creation_attribute>{
    public id!:string;
    public user_id!:string;
    public category_id!:string;
    public account_id!:string;
    public currency_id!:string;
    public amount!: number;
    public transaction_type!:string;
    public description!:String;
    public transaction_date!:Date;
    public created_at?:Date;
    public deleted_at?:Date|null;
}
// table creation 
transaction.init({
    id :{
        type: DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey:true},
    user_id:{
        type:DataTypes.UUID,
    },    
    category_id:{
        type: DataTypes.UUID
    },
    account_id:{
        type: DataTypes.UUID
    },
    currency_id:{
        type:DataTypes.UUID
    },
    amount:{
        type:DataTypes.DECIMAL(15,2)
    },
    transaction_type:{
       type:DataTypes.ENUM("expense","income")
    },
    description:{
        type: DataTypes.TEXT
    },
    transaction_date:{
        type:DataTypes.DATE
    }
     

},
{
    sequelize,
    tableName:"transaction",
    timestamps:true,
    createdAt:"created_at",
    updatedAt:false,
    paranoid:true,
    deletedAt:"deleted_at"
})