import OrderdProduct from '../models/orderd-product';

class OrderdProductService{

    createOrderedProduct = async (data:any) => OrderdProduct.create({...data});

}

export default new OrderdProductService;