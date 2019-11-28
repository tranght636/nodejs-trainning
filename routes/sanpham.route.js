var express = require('express');
var router = express.Router();
var controller = require('../controllers/sanpham.controller');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create')

module.exports = router;