import { Request, Response, NextFunction, response } from "express";
import orderService from "../services/order-service";
import orderValidator from "../validators/order-validator";
import ErrorHandler from '../utils/error-hanlder';
import orderdProductService from "../services/orderd-product-service";

class OrderController {

    async addOrder(req: Request, res: Response, next: NextFunction) {
        const body = await orderValidator.addOrder.validateAsync(req.body)
        const items = body.items;
        delete body.items;
        const response = await orderService.createOrder(body);
        console.log(response)
        if(!response)
            return next(ErrorHandler.badRequest())
        items.map(async (item:any)=> {
            item.orderId = response.id;
           await  orderdProductService.createOrderedProduct(item);
        })
        
        return res.json({status:1,message:"Order has been added"})
    }

    async getOrder(req: Request, res: Response, next: NextFunction) {

    }

    async getOrders(req: Request, res: Response, next: NextFunction) {

        const orders = await orderService.findOrders({});

        if(orders.length<1)
            return next(ErrorHandler.notFound("No Orders Found"))

        return res.json({status:1,message:'Orders Found',data:orders})

    }


}

export default new OrderController;