const express = require('express');

const router = express.Router();
const indexController = require('../controllers/indexController');

/**
 * get /
 * @route GET /
 * @returns {object} 200 - User Object
 * @returns {Error} default - Unexpected error
 */

router.get('/', indexController.blockAccess);

/**
 * get csrf token
 * @route GET /csrf
 * @returns {object} 200 - User Object
 * @returns {Error} default - Unexpected error
 */

router.post('/analyze', indexController.analyzeData);

module.exports = router;
