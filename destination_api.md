# Destination API

## Create Destination

**URL:** `/api/account/{id}/destinations`  
**Method:** `POST`  
**Description:** Creates a new destination for an account.

### Request Body

```json
{
  "accountId": "bcfa3e8a-6a42-4bed-bdf8-f22afa036ad4",
  "url": "https://webhook.site/your-webhook-url",
  "method": "POST",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "enwdj3bshwer43bjhjs9ereuinkjcnsiurew8s",
    "ACTION": "user.update",
    "Content-Type": "application/json",
    "Accept": "*"
  }
}
```

### Response Body

```json
201 OK

{
    "success": true,
    "message": "Destination created successfully."
}
```

## Get Destinations

**URL:** `/api/account/{id}/destinations`  
**Method:** `GET`  
**Description:** Retrieves destinations for a specific account.

### Response Body


```json
200 OK

{
    "success": true,
    "data": [
        {
            "id": "536f1fab-2916-4a01-8dc0-ce0fb6198116",
            "accountId": "bcfa3e8a-6a42-4bed-bdf8-f22afa036ad4",
            "url": "https://webhook.site/your-webhook-url",
            "method": "POST",
            "headers": "{\"APP_ID\":\"1234APPID1234\",\"APP_SECRET\":\"enwdj3bshwer43bjhjs9ereuinkjcnsiurew8s\",\"ACTION\":\"user.update\",\"Content-Type\":\"application/json\",\"Accept\":\"*\"}"
        }
    ]
}
```

## Get Destination

**URL:** `/api/account/{id}/destinations/{id}`  
**Method:** `GET`  
**Description:** Retrieves account details by ID.

### Response Body

```json
200 OK

{
    "success": true,
    "data": [
        {
            "id": "536f1fab-2916-4a01-8dc0-ce0fb6198116",
            "accountId": "bcfa3e8a-6a42-4bed-bdf8-f22afa036ad4",
            "url": "https://webhook.site/your-webhook-url",
            "method": "POST",
            "headers": "{\"APP_ID\":\"1234APPID1234\",\"APP_SECRET\":\"enwdj3bshwer43bjhjs9ereuinkjcnsiurew8s\",\"ACTION\":\"user.update\",\"Content-Type\":\"application/json\",\"Accept\":\"*\"}"
        }
    ]
}
```

## Update Account
**URL:** `/api/account/{id}/destinations/{id}`  
**Method:** `PUT`  
**Description:** Updates an existing account.
### Request Body:
```json
{
  "accountId": "bcfa3e8a-6a42-4bed-bdf8-f22afa036ad4",
  "url": "https://webhook.site/your-webhook-url",
  "method": "POST",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "enwdj3bshwer43bjhjs9ereuinkjcnsiurew8s",
    "ACTION": "user.get",
    "Content-Type": "application/json",
    "Accept": "*"
  }
}
```
### Response Body
```json
200 OK

{
    "success": true,
    "message": "Destination updated successfully."
}
```

## Delete Account
**URL:** `/api/account/{id}/destinations/{id}`  
**Method:** `DELETE`  
**Description:** Deletes a destination by ID.
### Response Body
```json
200 OK

{
    "success": true,
    "message": "Destination deleted successfully"
}
```
