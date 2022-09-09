const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
   let cart = req.session.cart;
   res.locals.cart = cart.getCart();
   res.render('cart');
});

router.post('/', (req, res, next) => {
    let productId = req.body.id;
    let quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    let productController = require('../controllers/productController');
    productController
        .getById(productId)
        .then(product => {
            let cartItem = req.session.cart.add(product, productId, quantity);
            res.json(cartItem);
        })
        .catch(error => next(error));
});

module.exports = router;
