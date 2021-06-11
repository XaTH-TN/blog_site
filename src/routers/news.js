var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.showPageDetail);

module.exports = router;
