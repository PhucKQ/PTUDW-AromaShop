const controller = {};
const models = require('../models');
const Comment = models.Comment;
const sequelize = require('sequelize');
let Op = sequelize.Op;

controller.add = (comment) => {
    return new Promise((resolve, reject) => {
        Comment
            .create(comment)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;