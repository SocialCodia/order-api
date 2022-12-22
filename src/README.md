

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