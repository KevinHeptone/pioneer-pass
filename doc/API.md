# API Reference

Current API specification based on implemented controllers and DTOs.

## Base

- Base path: `/api`
- Content type: `application/json`
- Success envelope: `ApiResponse<T>`

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

Error envelope:

```json
{
  "success": false,
  "data": null,
  "error": "Error message"
}
```

## Error Status Mapping

- `400 Bad Request`
  - `IllegalArgumentException`
  - Validation failure (`MethodArgumentNotValidException`)
- `404 Not Found`
  - `EntityNotFoundException`
- `409 Conflict`
  - `IllegalStateException`
- `500 Internal Server Error`
  - Unhandled exceptions

---

## Orders

### Create Order

- Method: `POST`
- Path: `/api/orders`

Request body (`CreateOrderRequest`):

```json
{
  "items": [
    { "productId": 1, "quantity": 2 }
  ],
  "customer": {
    "name": "Tina",
    "email": "tina@example.com",
    "phone": "010-1234-5678",
    "shippingAddress": "Seoul ...",
    "shippingCountry": "KR"
  }
}
```

Validation rules:

- `items`: must not be empty
- `items[].quantity`: minimum `1`
- `customer.name`: must not be blank
- `customer.email`: valid email format
- `customer.shippingAddress`: must not be blank
- `customer.shippingCountry`: exact length `2`

Response (`ApiResponse<OrderResponse>`):

```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "PENDING_PAYMENT",
    "totalAmountSol": 0.5,
    "items": [
      {
        "id": 10,
        "productId": 1,
        "productName": "Tina Pioneer Hoodie",
        "quantity": 2,
        "unitPriceSol": 0.25
      }
    ],
    "customer": {
      "name": "Tina",
      "email": "tina@example.com",
      "phone": "010-1234-5678",
      "shippingAddress": "Seoul ...",
      "shippingCountry": "KR"
    },
    "createdAt": "2026-03-06T04:00:00Z"
  },
  "error": null
}
```

`OrderResponse.status` enum:

- `PENDING_PAYMENT`
- `PAID`
- `CANCELLED`

### Get Order

- Method: `GET`
- Path: `/api/orders/{id}`
- Path parameter:
  - `id` (`Long`)

Response: `ApiResponse<OrderResponse>` (same shape as above)

---

## Payments

### Create Solana Payment

- Method: `POST`
- Path: `/api/payments/solana/create`
- Query parameter:
  - `orderId` (`Long`)

Response (`ApiResponse<CreatePaymentResponse>`):

```json
{
  "success": true,
  "data": {
    "paymentId": 100,
    "orderId": 1,
    "solanaPayUrl": "solana:...",
    "reference": "...",
    "amountSol": 0.5
  },
  "error": null
}
```

### Get Payment Status

- Method: `GET`
- Path: `/api/payments/{id}/status`
- Path parameter:
  - `id` (`Long`)

Response (`ApiResponse<PaymentStatusResponse>`):

```json
{
  "success": true,
  "data": {
    "paymentId": 100,
    "orderId": 1,
    "status": "PENDING",
    "txSignature": null,
    "confirmedAt": null
  },
  "error": null
}
```

`PaymentStatusResponse.status` enum:

- `PENDING`
- `CONFIRMED`
- `FAILED`

---

## Products

### Get Products (List)

- Method: `GET`
- Path: `/api/products`
- Behavior: returns active products only, ordered by `id` ascending

Response (`ApiResponse<List<ProductResponse>>`):

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Tina Pioneer Hoodie",
      "description": "Premium heavyweight hoodie with Tina Pioneer branding.",
      "priceSol": 0.25,
      "imageUrl": "https://images.tina.im/products/hoodie.png"
    }
  ],
  "error": null
}
```

### Get Product

- Method: `GET`
- Path: `/api/products/{id}`
- Path parameter:
  - `id` (`Long`)
- Behavior: active product only; inactive/missing -> `404`

Response (`ApiResponse<ProductResponse>`):

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Tina Pioneer Hoodie",
    "description": "Premium heavyweight hoodie with Tina Pioneer branding.",
    "priceSol": 0.25,
    "imageUrl": "https://images.tina.im/products/hoodie.png"
  },
  "error": null
}
```
