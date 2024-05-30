const Destination = require('../models/destination');
const { successResponse, errorResponse } = require('../utils/responseUtil');

exports.createDestination = (req, res) => {
  const { accountId, url, method, headers } = req.body;
  if (!accountId || !url || !method || !headers) {
    return errorResponse(res, 'All fields are required.', 400);
  }

  Destination.create({ accountId, url, method, headers }, (err) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, 'Destination created successfully.', 201);
  });
};

exports.getDestination = (req, res) => {
  const { id } = req.params;
  Destination.get(id, (err, destinations) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, destinations, 200);
  });
};

exports.getDestinations = (req, res) => {
  const { accountId } = req.params;
  Destination.findByAccountId(accountId, (err, destinations) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, destinations, 200);
  });
};

exports.updateDestination = (req, res) => {
  const { id } = req.params;
  const { url, method, headers } = req.body;
  Destination.update(id, { url, method, headers }, (err) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, 'Destination updated successfully.', 200);
  });
};

exports.removeDestination = (req, res) => {
  const { id } = req.params;
  Destination.delete(id, (err) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, 'Destination deleted successfully.', 200);
  });
};
