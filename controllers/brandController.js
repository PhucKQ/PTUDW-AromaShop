const controller = {};
const models = require('../models');
const Brand = models.Brand;
const sequelize = require('sequelize');
let Op = sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagepath'],
            include: [{ 
                model: models.Product,
                attributes: ['id'],
                where:  {
                    price: {
                        [Op.gte]: query.min,
                        [Op.lte]: query.max,
                    }
                }
            }]
        };
        if (query.category > 0) {
            options.include[0].where.categoryId = query.category;
        }
        if (query.color > 0) {
            options.include[0].include = [{
                model: models.ProductColor,
                attributes: [],
                where: { colorId: query.color}
            }];
        }

        Brand
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;