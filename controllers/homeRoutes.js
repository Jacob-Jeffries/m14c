const router = require('express').Router();
const sequelize = require('../config/connection');

const { User, Article, Comment  } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.status(200).render('index')
    return;
  }catch {
    res.status(500).json(err);
    return;
  }
});

module.exports = router;