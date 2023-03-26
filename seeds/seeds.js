const sequelize = require('../config/connection');
const { Articles } = require('../models');

const articleData = require('articleData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Pet.bulkCreate(articleData);

  process.exit(0);
};

seedDatabase();