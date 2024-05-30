const Account = require('../models/account');
const Destination = require('../models/destination');
const { successResponse, errorResponse } = require('../utils/responseUtil');

exports.createAccount = (req, res) => {
  const { email, name, website } = req.body;
  if (!email || !name) {
    return errorResponse(res, 'Email and Name are required.', 400);
  }

  Account.create({ email, name, website }, (err) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, 'Account created successfully.', 201);
  });
};

exports.getAccounts = (req, res) => {
  Account.get((err, accounts) => {
    if (err) return errorResponse(res, err.message, 500);
    if (!accounts) return errorResponse(res, 'Account not found.', 404);
    successResponse(res, accounts, 200);
  });
};

exports.getAccount = (req, res) => {
  const { id } = req.params;
  Account.findById(id, (err, account) => {
    if (err) return errorResponse(res, err.message, 500);
    if (!account) return errorResponse(res, 'Account not found.', 404);
    successResponse(res, account, 200);
  });
};

exports.deleteAccount = (req, res) => {
  const { id } = req.params;
  Account.delete(id, (err) => {
    if (err) return errorResponse(res, err.message, 500);
    Destination.deleteByAccountId(id, (err, account) => {
      if (err) return errorResponse(res, err.message, 500);
      if (!account) return errorResponse(res, 'Account not found.', 404);
      successResponse(res, 'Account deleted successfully.', 200);
    });
  });
};

exports.updateAccount = (req, res) => {
  const { id } = req.params;
  const { email, name, website } = req.body;
  Account.update(id, { email, name, website }, (err) => {
    if (err) return errorResponse(res, err.message, 500);
    successResponse(res, 'Account updated successfully.', 200);
  });
};
