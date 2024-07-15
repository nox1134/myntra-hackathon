const express = require('express');
const router = express.Router();
const OutcomeController = require('../controllers/OutcomeController');


router.get('/:outcomeName', OutcomeController.getProductFromOutcome);

module.exports = router;