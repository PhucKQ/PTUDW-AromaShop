const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
   let categoryController = require('../controllers/categoryController');
   categoryController
    .getAll()
    .then(data => {
        res.locals.categories = data;
        let productController = require('../controllers/productController');
        return productController.getTrendingProducts();
    })
    .then(data => {
        res.locals.trendingProducts = data;
        res.render('index');
    })
    .catch(error => next(error));
});

module.exports = router;