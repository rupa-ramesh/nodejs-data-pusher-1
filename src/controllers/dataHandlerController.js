const Account = require('../models/account');
const Destination = require('../models/destination');
const axios = require('axios');
const { successResponse, errorResponse } = require('../utils/responseUtil');

exports.handleIncomingData = async (req, res) => {
  const secretToken = req.headers['cl-x-token'];
  const data = req.body;

  if (!secretToken) {
    return errorResponse(res, 'Un Authenticate', 401);
  }

  Account.findBySecretToken(secretToken, (err, account) => {
    if (err) return errorResponse(res, err.message, 500);
    if (!account) return errorResponse(res, 'Account not found.', 404);

    Destination.findByAccountId(account.id, (err, destinations) => {
      if (err) return errorResponse(res, err.message, 500);

      destinations.forEach(destination => {
        const headers = JSON.parse(destination.headers);
        const config = {
          method: destination.method.toLowerCase(),
          url: destination.url,
          headers: headers,
          ...(destination.method.toLowerCase() === 'get' ? { params: data } : { data })
        };

        axios(config)
          .then(response => console.log(`Data sent to ${destination.url}`))
          .catch(error => console.error(`Failed to send data to ${destination.url}: ${error.message}`));
      });

      successResponse(res, 'Data processed successfully.', 200);
    });
  });
};
