import { DataTypes,Model,Optional } from "sequelize";
import { sequelize } from "../config/database";

interface transaction_attribute {
    id :string;
    users_id:string;
    category_id:string;
    account_id:string;
    currency_id:string;
    amount:number;
    transaction_type:"income"|"expense";
    description : Text;
    transaction_date?:Date;
    created_at?:Date;
    deleted_at?:Date|null;
}

interface transaction_creation_attribute extends Optional<transaction_attribute,"id"|"created_at"|"deleted_at"|"transaction_date">{}

export class transactions extends Model<transaction_attribute,transaction_creation_attribute>{
    public id!:string;
    public users_id!:string;
    public category_id!:string;
    public account_id!:string;
    public currency_id!:string;
    public amount!: number;
    public transaction_type!:"income"|"expense";
    public description!:Text;
    public transaction_date?:Date;
    public created_at?:Date;
    public deleted_at?:Date|null;
}
// table creation 
transactions.init({
    id :{
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true},
    users_id:{
        type:DataTypes.UUID,
        allowNull:false
    },    
    category_id:{
        type: DataTypes.UUID,
        allowNull:false
    },
    account_id:{
        type: DataTypes.UUID,
        allowNull:false
    },
    currency_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    amount:{
        type:DataTypes.DECIMAL(15,2),
        allowNull:false
    },
    transaction_type:{
       type:DataTypes.ENUM("expense","income"),
       allowNull:false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    transaction_date:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull:false
    }
     

},
{
    sequelize,
    tableName:"transactions",
    timestamps:true,
    createdAt:"created_at",
    updatedAt:false,
    paranoid:true,
    deletedAt:"deleted_at"
})