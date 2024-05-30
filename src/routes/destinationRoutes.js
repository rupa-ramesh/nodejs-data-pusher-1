const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.post('/account/:accountId/destinations', destinationController.createDestination);
router.get('/account/:accountId/destinations', destinationController.getDestinations);
router.get('/account/:accountId/destinations/:id', destinationController.getDestination);
router.put('/account/:accountId/destinations/:id', destinationController.updateDestination);
router.delete('/account/:accountId/destinations/:id', destinationController.removeDestination);

module.exports = router;