# Contact API spec

## Create Contact

Endpoint : POST /api/contacts

Header:
Authorization : token

Request Body :

```json
{
  "first_name": "DIO",
  "last_name": "Pratama",
  "email": "mail@mail.com",
  "phone": "+8982939"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "uuid",
    "firstname": "dadad",
    "last_name": "sadasdasd",
    "email": "mail@mail.com",
    "phone": "+2322332"
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Get Contact

Endpoint : GET /api/contacts/:contactId

Header:
Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": "uuid",
    "firstname": "dadad",
    "last_name": "sadasdasd",
    "email": "mail@mail.com",
    "phone": "+2322332"
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Update Contact

Endpoint : PUT /api/contacts/:contactId

Header:
Authorization : token

Request Body :

```json
{
  "first_name": "DIO",
  "last_name": "Pratama",
  "email": "mail@mail.com",
  "phone": "+8982939"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "uuid",
    "firstname": "dadad",
    "last_name": "sadasdasd",
    "email": "mail@mail.com",
    "phone": "+2322332"
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId

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

## Search Contact

Endpoint : GET /api/contacts

Header:
Authorization : token

Query params:

- name : string, contact first name or last name. optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- limit : number, default 10

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
  ],
  "meta": {
    "current_page": 1,
    "total_page": 10,
    "limit": 10
  }
}
```

Response Body Error :

```json
{
  "errors": "xxxxx"
}
```
