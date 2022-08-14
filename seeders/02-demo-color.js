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
    await queryInterface.bulkInsert('Colors', [
      {
        name: 'Black',
        code: 'black',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Black Leather',
        imagepath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDSIPDQwMDRsUFRAiGikWIiAWHx0YHSgtHR0lGxYfITEhJS4rLi4uFx8zODMsNygtLisBCgoKDQwKDg8KGisdFhkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAB4AHgMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAQIGA//EACIQAAICAQMEAwAAAAAAAAAAAAECABEhAxIxBDJBUSJygv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDBNnEMse2DesfaVjn3DRQrzzGFx5hargGvzAYGLWjCu4N2mV1ajp3OnZKlrBHMjcW1GRuU4MkD+TjkbhKTT1WTciF81YWCKdTWCAAMVNNc5ndSuGywlH//2Q==',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Black with red',
        imagepath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIDwgKCgkUDRYPDQwRDxQUFRAWIB0iFiAdFRYkHCggJBolGxMVITEhJSkrLi4uIx8zODMsNygtLisBCgoKDQwJDg8OGisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAB4AHgMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAABAAIDB//EACUQAAEDAgUEAwAAAAAAAAAAAAEAESECQRIxUXHBIrHR8ANCgf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBQYA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AOcg4fqxaLYfeUFoN8m2WTkVVVM0kEZgPZYmInQjVVzYSIiR31Q+26jwqBZ1wOFvGqagxNxykdTHZJ6vkayEkjWyXNMwRkp3f9VSHlIsj//Z',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Gold',
        code: 'gold',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }, {
        name: 'Spacegrey',
        imagepath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6VwLno6T4AZuOcO6kbdxD00N5tq8rf9luJpWrLvFky6nw7US',
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
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
