import {Model,DataTypes} from "sequelize"
import sequelize from "./index";
import OrderdProduct from "./orderd-product";

class Product extends Model{
    declare id:number;
    declare name:string;
    declare price:string;
    declare qauntity:string;
    declare description:string;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(128),
        allowNull:false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    qauntity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    tableName:'products',
})

Product.hasMany(OrderdProduct,{
    sourceKey:'id',
    foreignKey:{allowNull:false,name:'productId'}
});

export default Product

