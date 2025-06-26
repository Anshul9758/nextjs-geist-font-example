const express = require('express');
const router = express.Router();
const { getIndex } = require('../controllers/indexController');

// Route using controller
router.get('/', getIndex);

module.exports = router;
