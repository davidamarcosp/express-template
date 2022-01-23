const express = require('express');
const getHelloWorldHandler = require('../hello-world/controllers/getHelloWorldController.js');
const postHelloWorldHandler = require('../hello-world/controllers/postHelloWorldController.js');

const router = express.Router();

router.get('/', getHelloWorldHandler);
router.post('/', postHelloWorldHandler);

module.exports = router;
