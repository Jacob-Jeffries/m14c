// Tie together Modular Routes

const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

module.exports = router;