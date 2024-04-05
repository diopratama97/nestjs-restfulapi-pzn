# User api spec

## Register User

Endpoint : POST /api/users/register

Request Body :

```json
{
  "username": "DIO",
  "password": "xxxx",
  "name": "DIO YOGA PRATAMA"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "dio",
    "name": "dio"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already exist"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "DIO",
  "password": "xxxx"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "dio",
    "name": "dio",
    "token": "xxxx"
  }
}
```

Response Body Error :

```json
{
  "errors": "User not found"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "dio",
    "name": "dio"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers:
Authorization: token

Request Body :

```json
{
  "username": "DIO", //optional
  "password": "xxxx", //optional
  "name": "DIO YOGA PRATAMA" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "dio",
    "name": "dio"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already exist"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
Authorization: token

Response Body Success :

```json
{
  "data": true
}
```
