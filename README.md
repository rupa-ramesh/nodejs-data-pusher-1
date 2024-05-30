# Node.js Data Pusher

## Overview

Node.js Data Pusher is an Express web application designed to facilitate data transfer for accounts across multiple destinations. It provides functionalities to create, retrieve, update, and delete accounts and destinations, along with a data handler to process incoming data and forward it to the associated destinations.

## Features

- **Account Management**: Create, retrieve, update, and delete accounts.
- **Destination Management**: Create, retrieve, update and delete destinations associated with accounts.
- **Data Handling**: Receive JSON data through a designated endpoint and forward it to the appropriate destinations based on account settings.
- **Security**: Utilizes secret tokens for authentication and authorization of data handling requests.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nodejs-data-pusher.git
cd nodejs-data-pusher
npm i
npm start
```

## Sample API Requests

Sample JSON files for API requests are provided in the `samples` directory.

- **Account**: `account_api.md`
- **Destinations**: `destination_api.md`
- **Data Handler API**: `datahandler_api.md`

You can use these samples with tools like Postman or curl to test the API endpoints.
