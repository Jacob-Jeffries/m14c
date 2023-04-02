const router = require('express').Router();
const { Article } = require('../../models');

// Create New User
router.post('/create', async (req, res) => {
  try {
    console.log(`\nCreating new article: ${req.body.username}.`);
    const userData = await Article.create({
      user_id: req.body.user_id
    });
    res.status(200).json(userData);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  console.log(`\nGetting information for all users.`);
  try{
    const allArticles = await Article.findAll();
    res.status(200).json(allArticles);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Read Single User
router.get('/:user_id', async (req, res) => {
  console.log(`\nGetting information for user: #${req.params.user_id}.`);
  try {
    const userData = await User.findByPk(req.params.user_id)
    res.status(200).json(userData);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Single User
router.put('/update/:user_id', async (req, res) => {
  console.log(`\nUpdating information for user: #${req.params.user_id}.`);
  try{
    const updateData = await User.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    },{
      where: { id: req.params.user_id }
    });
    res.status(200).json(updateData);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/delete/:user_id', (req, res) => {
  console.log(`Delete user with id: ${req.params.user_id}.`);
  try{
    const deleteData = User.destroy({
      where: { id: req.params.user_id }
    });
    res.status(200).json(deleteData);
    }catch(err){
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;