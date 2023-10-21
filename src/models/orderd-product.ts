import { Model, DataTypes, ForeignKey } from 'sequelize'
import sequelize from './index';
import Order from './order-model';
import Product from './product-model';

class OrderdProduct extends Model {
    declare id: number;
    declare productId: ForeignKey<Product['id']>;
    declare quantity: string;
    declare unitPrice: string;
    declare tax: string;
    declare amount: string;
    declare orderId: ForeignKey<Order['id']>
}

OrderdProduct.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unitPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tax: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        tableName: 'orderd_products',
        sequelize
    })

export default OrderdProduct;