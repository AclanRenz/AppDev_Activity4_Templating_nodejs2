const express = require('express');
const router = express.Router();
const hp = require('../controller/hp_controller')

router.get('/', hp.home);
router.get('/favorites', hp.favorites);
router.get('/playlist', hp.playlist);
router.get('/about', hp.about);
router.get('/artist', hp.artist);

module.exports = router;