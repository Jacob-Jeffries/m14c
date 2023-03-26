const router = require('express').Router();

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