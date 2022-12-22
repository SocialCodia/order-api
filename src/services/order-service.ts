import { Request, Response, NextFunction } from "express";
import Order from "../models/order-model";
import OrderdProduct from '../models/orderd-product';

class OrderService {

    createOrder = async (data: any) => await Order.create({ ...data })

    findOrders = async (filter:any) => await Order.findAll({include:[{
        model:OrderdProduct,
        required:true,
    }]});
}

export default new OrderService;