const express = require('express');
const router = express.Router();
const hp = require('../controller/hp_controller')

router.get('/', hp.home);
router.get('/favorites', hp.favorites);
router.get('/watchlist', hp.watchlist);
router.get('/trending', hp.trending);
router.get('/recent', hp.recent);

module.exports = router;