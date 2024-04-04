# addresse API spec

## Create addresse

Endpoint : POST /api/contacts/:contactId/addresses

Header:
Authorization : token

Request Body :

```json
{
  "street": "Jalan x",
  "city": "xxx",
  "province": "xxx",
  "country": "xxxx",
  "postal_code": "232323"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "uuid",
    "street": "Jalan x",
    "city": "xxx",
    "province": "xxx",
    "country": "xxxx",
    "postal_code": "232323"
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Get addresse

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Header:
Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": "uuid",
    "street": "Jalan x",
    "city": "xxx",
    "province": "xxx",
    "country": "xxxx",
    "postal_code": "232323"
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Update addresse

Endpoint : PUT /api/contacts/:contactId/addresses/:addresseId

Header:
Authorization : token

Request Body :

```json
{
  "street": "Jalan x",
  "city": "xxx",
  "province": "xxx",
  "country": "xxxx",
  "postal_code": "232323"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "uuid",
    "street": "Jalan x",
    "city": "xxx",
    "province": "xxx",
    "country": "xxxx",
    "postal_code": "232323"
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Remove addresse

Endpoint : DELETE /api/contacts/:contactId/addresses/:addresseId

Header:
Authorization : token

Response Body Success :

```json
{
  "data": true
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Search addresse

Endpoint : GET /api/contacts/:contactId/addresses

Header:
Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": "uuid",
      "firstname": "dadad",
      "last_name": "sadasdasd",
      "email": "mail@mail.com",
      "phone": "+2322332"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```
