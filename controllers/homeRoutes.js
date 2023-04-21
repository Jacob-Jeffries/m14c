const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')

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

router.get('/login', (req, res) => {
  try {
      if (req.session.loggedIn) {
          res.redirect('/');
        }
        res.render('login');
  } catch {
      res.status(500).json(err);
  }
});

router.get('/oops', async (req, res) => {
  try {
      res.render('oops')
  } catch {
      res.status(500).json(err);
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

module.exports = router;
