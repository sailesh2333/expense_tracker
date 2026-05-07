import { DataTypes,Model,Optional } from "sequelize";
import { sequelize } from "../config/database";

interface accounts_attribute{
    id:string;
    users_id:string;
    name:string;
    currency_id:string;
    account_type:string;
    balance:number;
    created_at?:Date;
    deleted_at?:Date;
}

interface accounts_creation_attributes extends Optional<accounts_attribute,"id"|"created_at"|"deleted_at"> {}

export class accounts extends Model<accounts_attribute,accounts_creation_attributes>{
    public id!:string;
    public users_id!:string;
    public name!: string;
    public currency_id!:string;
    public account_type!:string;
    public balance!:number;
    public created_at?:Date;
    public deleted_at?:Date;
}
accounts.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
        },
    users_id:{
        type:DataTypes.UUID,
        allowNull:false
    },    
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    currency_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    account_type:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    balance:{
        type:DataTypes.DECIMAL(15,2),
        allowNull:false
    },
        
},{
    sequelize,
    tableName:"accounts",
    timestamps:true,
    createdAt:"created_at",
    updatedAt:false,
    paranoid:true,
    deletedAt:"deleted_at"
})