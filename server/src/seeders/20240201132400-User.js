const bcrypt = require('bcrypt');
const {
  ROLES: { CUSTOMER, CREATOR },
  SALT_ROUNDS,
} = require('../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'B',
          last_name: 'B',
          display_name: 'B',
          password: bcrypt.hashSync('buyer00', SALT_ROUNDS),
          email: 'b@b.b',
          role: CUSTOMER,
        },
        {
          first_name: 'C',
          last_name: 'C',
          display_name: 'C',
          password: bcrypt.hashSync('creative00', SALT_ROUNDS),
          email: 'c@c.c',
          role: CREATOR,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
