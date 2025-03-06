const express = require('express');
const aiController = require('../../controller/ai.controller');
const router = express.Router();

router.get('/generate-content', aiController.generateContent);

module.exports = router;