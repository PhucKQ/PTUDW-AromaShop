const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('category');
});

router.get('/:id', function (req, res) {
    res.render('single-product');
});

module.exports = router;