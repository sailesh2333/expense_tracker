import { DataType,DataTypes,Model,Optional } from "sequelize";
import { sequelize } from "../config/database";

interface categories_attributes{
    id:string;
    name:string;
    users_id:string;
    type:"income"|"expense";
    color:string;
    describe:string;
    created_at?:Date;
    deleted_at?:Date
}

interface categories_creation_attribute extends Optional<categories_attributes,"id"|"created_at"|"deleted_at">{}


export class categories extends Model<categories_attributes,categories_creation_attribute>{
public id!:string;
public name!:string;
public users_id!:string;
public type!:"income"|"expense";
public color!:string;
public describe!:string;
public created_at?:Date;
public deleted_at?:Date;
}

categories.init({
   id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
   },
   name: {
    type:DataTypes.STRING(100),
    allowNull:false
    },
   users_id:{
    type:DataTypes.UUID,
    allowNull:false
    },
   type :{
    type:DataTypes.ENUM("income","expense"),
    allowNull:false
    },
   color :{
    type:DataTypes.STRING,
    allowNull:false
    },
   describe :{
    type:DataTypes.TEXT,
    allowNull:false
    },
},
{sequelize,
    tableName:"categories",
    timestamps:true,
    updatedAt:false,
    createdAt:"created_at",
    paranoid:true,
    deletedAt:"deleted_at"});

