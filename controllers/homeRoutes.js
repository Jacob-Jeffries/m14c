const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')

const { User, Comment, Article } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.status(200).render('index')
    return;
  }catch {
    res.status(500).json(err);
    return;
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try{
    res.render('dashboard')
    return;
  } catch (err) {
    res.status(404).json(err)
    return;
  }
});

router.get('/oops', async (req, res) => {
  try {
      res.render('oops')
  } catch {
      res.status(500).json(err);
  }
});

module.exports = router;