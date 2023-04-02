const router = require('express').Router();
const sequelize = require('../config/connection');

const { User, Pet, Rating } = require('../models');

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