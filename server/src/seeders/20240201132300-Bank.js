module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'banks',
      [
        {
          card_number: '4564654564564564',
          name: 'SquadHelp',
          expiry: '11/27',
          cvc: '453',
          balance: 0,
        },
        {
          card_number: '4111111111111111',
          name: 'buyer',
          expiry: '09/27',
          cvc: '505',
          balance: 5000,
        },
        {
          card_number: '5555555555554444',
          name: 'creative',
          expiry: '09/27',
          cvc: '505',
          balance: 0,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('banks', null, {});
  },
};
