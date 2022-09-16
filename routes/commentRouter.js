const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.isLoggedIn, function (req, res, next) {
    let controller = require('../controllers/commentController');
    let comment = {
        userId: req.session.user.id,
        productId: req.body.productId,
        message: req.body.message,
    };

    if (!isNaN(req.body.parentCommentId) && (req.body.parentCommentId != '')) {
        comment.parentCommentId = req.body.parentCommentId;
    }

    controller
        .add(comment)
        .then(data => {
            res.redirect('/products/' + data.productId);
        })
        .catch(error => next(error));

});

module.exports = router;
