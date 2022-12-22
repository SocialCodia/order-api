import { Model, ForeignKey, DataTypes, Optional } from "sequelize"
import Customer from './customer-model'
import sequelize from './index'
import Company from "./company-model"
import OrderdProduct from "./orderd-product"

interface IngredientOrder {
    id: number,
    customerId: ForeignKey<Customer['id']>,
    orderNumber: number,
    companyId: ForeignKey<Company['id']>,
    orderDate: Date,
    shipmentDate: Date,
    customerNote: String,
    total: Number,
    taxes: Number,
    grandTotal: Number,
    paymentStatus: boolean,
    packedStatus: boolean,
    shipStatus: boolean,
    deliveryStatus: boolean,
    fromQuotation: String
}

export interface IngredientOrderInput extends Optional<IngredientOrder, 'id'> { }
export interface IngredientOrderOutput extends Required<IngredientOrder> { }

class Order extends Model<IngredientOrder, IngredientOrderInput> implements IngredientOrder {
    public id!: number;
    public customerId!: ForeignKey<Customer['id']>;
    public orderNumber!: number;
    public companyId!: ForeignKey<Company['id']>;
    public orderDate!: Date;
    public shipmentDate!: Date;
    public customerNote!: string;
    public total!: Number;
    public taxes!: Number;
    public grandTotal!: Number;
    public status!: boolean;
    public paymentStatus!: boolean;
    public packedStatus!: boolean;
    public shipStatus!: boolean;
    public deliveryStatus!: boolean;
    public fromQuotation!: string;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        orderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
        orderDate: {
            type: DataTypes.DATE
        },
        shipmentDate: {
            type: DataTypes.DATE
        },
        customerNote: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taxes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grandTotal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        packedStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        shipStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        deliveryStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fromQuotation: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    , {
        tableName: 'orders',
        sequelize
    }
)

Order.hasMany(OrderdProduct, {
    sourceKey: 'id',
    foreignKey: {allowNull:false,name:'orderId'}
})

export default Order