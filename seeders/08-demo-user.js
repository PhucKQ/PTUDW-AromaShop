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
     await queryInterface.bulkInsert('Users', [
      {
        "username": "pvan0",
        "password": "yZSFZugO6a",
        "fullname": "Phil Van Arsdall",
        "avatarPath": "/img/product/review-1.png",
        "isAdmin": true,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "hryder1",
        "password": "aELlfU9L",
        "fullname": "Harris Ryder",
        "avatarPath": "/img/product/review-2.png",
        "isAdmin": false,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "djamot2",
        "password": "MeUI2pWk4k",
        "fullname": "Danita Jamot",
        "avatarPath": "/img/product/review-3.png",
        "isAdmin": true,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "felcum3",
        "password": "zD23XTCGD",
        "fullname": "Fabiano Elcum",
        "avatarPath": "/img/product/review-1.png",
        "isAdmin": false,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "tcarruthers4",
        "password": "1iux19ZHkB",
        "fullname": "Tresa Carruthers",
        "avatarPath": "/img/product/review-2.png",
        "isAdmin": true,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "ahucklesby5",
        "password": "FzvDFDXlUFqg",
        "fullname": "Annie Hucklesby",
        "avatarPath": "/img/product/review-3.png",
        "isAdmin": false,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "easty6",
        "password": "lfe3mtOmvG",
        "fullname": "Estella Asty",
        "avatarPath": "/img/product/review-1.png",
        "isAdmin": false,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "dhutton7",
        "password": "pjdbSEt",
        "fullname": "Donna Hutton",
        "avatarPath": "/img/product/review-2.png",
        "isAdmin": false,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "kornillos8",
        "password": "eXtwTLUi3",
        "fullname": "Katerina Ornillos",
        "avatarPath": "/img/product/review-3.png",
        "isAdmin": false,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        "username": "dmalam9",
        "password": "DQC6yQ",
        "fullname": "Derry Malam",
        "avatarPath": "/img/product/review-1.png",
        "isAdmin": false,
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
