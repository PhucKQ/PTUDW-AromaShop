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
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Men',
        imagepath: '/img/home/hero-slide1.png',
        summary: 'Men item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Women',
        imagepath: '/img/home/hero-slide2.png',
        summary: 'Women item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Accessories',
        imagepath: '/img/home/hero-slide3.png',
        summary: 'Accessories item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Footwear',
        imagepath: '/img/home/hero-slide1.png',
        summary: 'Footwear item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Bay item',
        imagepath: '/img/home/hero-slide2.png',
        summary: 'Bay item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Electronics',
        imagepath: '/img/home/hero-slide3.png',
        summary: 'Electronics item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Food',
        imagepath: '/img/home/hero-slide1.png',
        summary: 'Food item',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
