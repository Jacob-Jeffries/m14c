const sequelize = require('../config/connection');
const { Article, User, Comment } = require('../models');

const articleData = require('./articleData.json');
const userData = require('./userData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Article.bulkCreate(articleData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();