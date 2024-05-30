# Account API

## Create Account

**URL:** `/api/accounts`  
**Method:** `POST`  
**Description:** Creates a new account..
### Request Body
```json
{
  "email": "ruparameshmca@gmail.com",
  "name": "Rupa R",
  "website": "https://example.com" // Optional
}
```
### Response Body
```json
201 OK

{
    "success": true,
    "message": "Account created successfully."
}
```

## Get Accounts
**URL:** `/api/accounts`  
**Method:** `GET`  
**Description:** Retrieves all account details.
### Response Body
```json
200 OK

{
    "success": true,
    "data": [
        {
            "id": "bcfa3e8a-6a42-4bed-bdf8-f22afa036ad4",
            "email": "user@example.com",
            "name": "Rupa R",
            "secretToken": "3ef123d5-bc7b-40ff-832d-85717545ed73",
            "website": "https://example.com"
        }
    ]
}
```

## Get Account

**URL:** `/api/accounts/{id}`  
**Method:** `GET`  
**Description:** Retrieves account details by ID.

### Response Body

```json
200 OK

{
    "success": true,
    "data": {
        "id": "bcfa3e8a-6a42-4bed-bdf8-f22afa036ad4",
        "email": "user@example.com",
        "name": "Rupa R",
        "secretToken": "3ef123d5-bc7b-40ff-832d-85717545ed73",
        "website": "https://example.com"
    }
}
```

## Update Account

**URL:** `/api/accounts/{id}`  
**Method:** `PUT`  
**Description:** Updates an existing account.

### Request Body:

```json
{
  "email": "ruparameshmca@gmail.com",
  "name": "Rupa Ramesh",
  "website": "https://example.com"  // Optional
}
```

### Response Body

```json
200 OK

{
    "success": true,
    "message": "Account updated successfully."
}
```

## Delete Account

**URL:** `/api/accounts/{id}`  
**Method:** `DELETE`  
**Description:** Deletes an account by ID.

### Response Body

```json
200 OK

{
    "success": true,
    "message": "Account deleted successfully"
}
```
