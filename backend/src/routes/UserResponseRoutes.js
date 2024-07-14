const express = require('express');
const router = express.Router();
const UserResponseController = require('../controllers/UserResponseController');

router.get('/', UserResponseController.getAllUserResponses);
router.post('/', UserResponseController.addUserResponse);
router.get('/latest',UserResponseController.getLatestUserResponse)
module.exports = router;
