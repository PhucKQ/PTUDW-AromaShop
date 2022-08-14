'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('ProductColors', [
      {
        "productId": 29,
        "colorId": 1,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 3, 
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 9, 
        "colorId": 5, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 3, 
        "colorId": 1, 
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 31,
        "colorId": 4,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 3, 
        "colorId": 3, 
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 29,
        "colorId": 4,
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 19,
        "colorId": 3,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 1,
        "colorId": 5, 
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 32,
        "colorId": 4,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 25,
        "colorId": 5,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 32,
        "colorId": 3,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 27,
        "colorId": 3,
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 19,
        "colorId": 2,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 25,
        "colorId": 1,
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 2, 
        "colorId": 1, 
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 3, 
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 18,
        "colorId": 1,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 4, 
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 11,
        "colorId": 5,
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 12,
        "colorId": 2,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 35,
        "colorId": 5,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 8, 
        "colorId": 3, 
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 19,
        "colorId": 2,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 19,
        "colorId": 5,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 35,
        "colorId": 4,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 11,
        "colorId": 1,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 33,
        "colorId": 4,
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 28,
        "colorId": 2,
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 24,
        "colorId": 4,
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 1, 
        "colorId": 5, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 27,
        "colorId": 5,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 13,
        "colorId": 2,
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 29,
        "colorId": 3,
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 33,
        "colorId": 4,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 8, 
        "colorId": 5, 
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 29,
        "colorId": 2,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 6, 
        "colorId": 4, 
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 28,
        "colorId": 4,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 3, 
        "colorId": 3, 
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 30,
        "colorId": 5,
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 25,
        "colorId": 5,
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 5, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 7, 
        "colorId": 2, 
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 25,
        "colorId": 1,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 29,
        "colorId": 5,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 1, 
        "colorId": 2, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 23,
        "colorId": 2,
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 1, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 8, 
        "colorId": 4, 
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 22,
        "colorId": 3,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 6, 
        "colorId": 3, 
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 6, 
        "colorId": 3, 
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 1, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 3, 
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 2, 
        "colorId": 4, 
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 34,
        "colorId": 2,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 15,
        "colorId": 3,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 6, 
        "colorId": 4, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 8, 
        "colorId": 5, 
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 30,
        "colorId": 1,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 4, 
        "colorId": 4, 
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 15,
        "colorId": 3,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 34,
        "colorId": 4,
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 16,
        "colorId": 2,
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 6, 
        "colorId": 5, 
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 13,
        "colorId": 3,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 30,
        "colorId": 5,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 14,
        "colorId": 5,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 22,
        "colorId": 3,
        "imagepath": "/img/product/product2.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 29,
        "colorId": 1,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 8, 
        "colorId": 1, 
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 17,
        "colorId": 5,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 35,
        "colorId": 1,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 19,
        "colorId": 3,
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 14,
        "colorId": 3,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 34,
        "colorId": 1,
        "imagepath": "/img/product/product6.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 26,
        "colorId": 4,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 11,
        "colorId": 1,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 15,
        "colorId": 3,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 32,
        "colorId": 4,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 21,
        "colorId": 5,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 12,
        "colorId": 3,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 17,
        "colorId": 1,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 11,
        "colorId": 5,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 30,
        "colorId": 5,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 20,
        "colorId": 4,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 25,
        "colorId": 4,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 26,
        "colorId": 5,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 1, 
        "colorId": 5, 
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 7, 
        "colorId": 1, 
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 14,
        "colorId": 4,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 26,
        "colorId": 5,
        "imagepath": "/img/product/product8.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 13,
        "colorId": 2,
        "imagepath": "/img/product/product4.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 35,
        "colorId": 1,
        "imagepath": "/img/product/product1.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 5, 
        "colorId": 2, 
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 31,
        "colorId": 1,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 16,
        "colorId": 5,
        "imagepath": "/img/product/product3.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 11,
        "colorId": 1,
        "imagepath": "/img/product/product5.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        "productId": 8, 
        "colorId": 5, 
        "imagepath": "/img/product/product7.png",
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ProductColors', null, {});
  }
};
