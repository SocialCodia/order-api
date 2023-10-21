import { Model, DataTypes } from "sequelize"
import sequelize from "./index";
import Order from "./order-model";

class Company extends Model {
    declare id: number;
    declare name: string;
}

Company.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'companies',
    sequelize
})

Company.hasMany(Order,{
    sourceKey:'id',
    foreignKey:{allowNull:false,name:'companyId'}
});

export default Company