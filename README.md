Your assignment is to create and fetch sale orders

Add sale order api should have these parameter to add order:

customerId, orderNo, companyId, orderDate, shipmentDate, customerNote, total, taxes, grandTotal, list_of_items(productId, quantity, unitPrice, tax, amount), status(default pending), paymentStatus, packedStatus, shipStatus, deliveryStatus, fromQuotation

Response expected status:0 for failed & status: 1 for success


After creating add-sale-order API then create getSaleOrders API

Order detail with list on items in order.

Response expected [list of order containing list of items]

Make these two APIs till evening. 
Technologies should be NodeJs & MySQL Database.
You're free to use any library or framework.

You need to submit your code and schema of your database & we are expecting you to submit this 
 assignment till evening.



# ADD ORDER :

*ENDPONT* 

http://localhost:5000/api/v1/order/add

*METHOD * : ```POST```

*BODY*

```
{
    "customerId":"1",
    "companyId":"1",
    "orderDate":"12-12-2020",
    "orderNumber":"345678",
    "shipmentDate":"12-12-2020",
    "customerNote":"This is customer note",
    "total":"12",
    "taxes":"12",
    "grandTotal":"12",
    "paymentStatus":true,
    "packedStatus":true,
    "shipStatus":false,
    "deliveryStatus":false,
    "fromQuotation":"I don't know what is this?",
    "items":[
        {
        "productId":"11",
        "quantity":1,
        "unitPrice":100,
        "tax":10,
        "amount":110
    },
    {   
        "productId":"1",
        "quantity":1,
        "unitPrice":100,
        "tax":10,
        "amount":110
    }
    ]
}
```

# FETCH ORDER :

*ENDPONT* 

http://localhost:5000/api/v1/orders


*METHOD * : ```GET```

*RESPONSE*

```
{
    "status": 1,
    "message": "Orders Found",
    "data": [
        {
            "id": 2,
            "orderNumber": 345678,
            "orderDate": "2020-12-11T18:30:00.000Z",
            "shipmentDate": "2020-12-11T18:30:00.000Z",
            "customerNote": "This is customer note",
            "total": "12",
            "taxes": "12",
            "grandTotal": "12",
            "paymentStatus": true,
            "packedStatus": true,
            "shipStatus": false,
            "deliveryStatus": false,
            "fromQuotation": "I don't know what is this?",
            "createdAt": "2022-12-22T10:08:17.000Z",
            "updatedAt": "2022-12-22T10:08:17.000Z",
            "customerId": 1,
            "companyId": 1,
            "OrderdProducts": [
                {
                    "id": 1,
                    "quantity": 1,
                    "unitPrice": 100,
                    "tax": 10,
                    "amount": 110,
                    "createdAt": "2022-12-22T10:08:17.000Z",
                    "updatedAt": "2022-12-22T10:08:17.000Z",
                    "orderId": 2
                },
                {
                    "id": 2,
                    "quantity": 1,
                    "unitPrice": 100,
                    "tax": 10,
                    "amount": 110,
                    "createdAt": "2022-12-22T10:08:17.000Z",
                    "updatedAt": "2022-12-22T10:08:17.000Z",
                    "orderId": 2
                }
            ]
        }
    ]
}
```