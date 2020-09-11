const express = require('express');
const testController = require('./../controllers/testController');

const router = express.Router(testController.createDocument);

router.route('/').post(testController.createDocument);

module.exports = router;
