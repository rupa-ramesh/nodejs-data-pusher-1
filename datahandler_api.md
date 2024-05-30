# Data Handler API

## Handle Incoming Data
**URL:** `/api/server/incoming_data`  
**Method:** `POST`  
**Description:** Endpoint to receive incoming data and push it to associated destinations.
### Headers
```http
CL-X-TOKEN: 3ef123d5-bc7b-40ff-832d-85717545ed73
Content-Type: application/json
```
### Request Body
```json
{
  "key1": "value1",
  "key2": "value2"
}
```
### Response Body 
```json
200 OK

{
  "success": true,
  "message": "Data processed successfully."
}
```