const bcrypt = require('bcrypt');
const {
  ROLES: { CUSTOMER, CREATOR },
  SALT_ROUNDS,
} = require('../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'B',
          lastName: 'B',
          displayName: 'B',
          password: bcrypt.hashSync('buyer00', SALT_ROUNDS),
          email: 'b@b.b',
          role: CUSTOMER,
        },
        {
          firstName: 'C',
          lastName: 'C',
          displayName: 'C',
          password: bcrypt.hashSync('creative00', SALT_ROUNDS),
          email: 'c@c.c',
          role: CREATOR,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
