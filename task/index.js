require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
app.use(bodyParser.json());
const {
    successResponse,
    errorResponse
} = require('../src/utils/responseUtil');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'data.json');

fs.readFile(jsonFilePath, 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    } 
    try {
        const jsonData = JSON.parse(data);
        console.log('JSON data:', jsonData);
        const batchSize = 5;
        console.log("jsonData", jsonData)
        for (let i = 0; i < jsonData.length; i += batchSize) {
            const batch = jsonData.slice(i, i + batchSize);
            await processDataBatch(batch);
        }
    } catch (err) {
        console.error('Error processing profiles:', err);
    }
});

async function processDataBatch(batch) {
    const promises = batch.map(itemWithTrait => {
        if (itemWithTrait.traits) {
            return createProfile(itemWithT.traits);
        } else {
            return getProfile();
        }
    });
    await Promise.all(promises);
}

async function createProfile(itemWithTrait) {
    try {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://a.klaviyo.com/api/profiles/',
            headers: {
                'Authorization': 'Klaviyo-API-Key your-private-api-key',
                'accept': 'application/json',
                'content-type': 'application/json',
                'revision': '2024-05-15'
            },
            data: {
                "type": "profile",
                "attributes": {
                    itemWithTrait
                }
            }
        };
        let response = await axios(config);
        console.log(JSON.stringify(response.data));
        successResponse(response.data, 'Account created successfully.', 201);
    } catch (error) {
        console.error('Error creating profile:', error);
        return errorResponse(error, 500);
    }
}

async function getProfile() {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://a.klaviyo.com/api/events/',
            headers: {
                'Authorization': `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
                'accept': 'application/json',
                'revision': '2024-05-15'
            }
        };
        let response = await axios(config);
        console.log(JSON.stringify(response.data));
        successResponse(response.data, 200);
    } catch (error) {
        console.error('Error getting profile:', error);
        return errorResponse(error, 500);
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});