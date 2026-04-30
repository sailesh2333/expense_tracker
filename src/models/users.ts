import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from "../config/database";

interface user_attributes{
  id:number;
  name:string;
  email:string;
  password:string;
  created_at?: Date;
  deleted_at?:Date|null;
}

interface user_creation_attribute extends Optional<user_attributes,"id"|"created_at"|"deleted_at">{}

export class users extends Model<user_attributes,user_creation_attribute> 
implements user_attributes{
  public id! :number;
  public name!:string;
  public email!: string;
  public password!: string;
  public created_at?: Date;
  public deleted_at?: Date | null;
}

users.init(
    {
      id: {
        type:DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey:true
      },
      name : {
        type:DataTypes.STRING,
        allowNull:false
      },
      email :{
        type : DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      password:{
        type: DataTypes.STRING,
        allowNull:false
      }
    },
    {
         sequelize,
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    paranoid: true,
    deletedAt: "deleted_at"
    }
);