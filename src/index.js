const express = require('express');

const { root } = require('./routes');

const router = express.Router();

router.use('/', root);
module.exports = router;
