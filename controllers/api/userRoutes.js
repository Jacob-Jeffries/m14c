const router = require('express').Router();
const { User, Comment, Article } = require('../../models');

//CRUD routes

// Route POST - /api/user/
// Create New User
router.post('/', async (req, res) => {
  console.log(`\nCreating new user: ${req.body.username}.`);
  try {
    const userData = await User.create({
      user_level: req.body.user_level,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    res.status(200).json(userData);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Route GET - /api/user/
// Read all Users
router.get('/', async (req, res) => {
  console.log(`\nGetting information for all users.`);
  try{
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Rotue GET - /api/user/:user_id
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

// Route PUT - /api/user/:user_id
// Update Single User
router.put('/:user_id', async (req, res) => {
  console.log(`\nUpdating information for user: #${req.params.user_id}.`);
  try{
    const updateData = await User.update({
      user_level: req.body.user_level,
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

// Route DELETE - /api/user/:user_id
// Delete Single User
router.delete('/:user_id', (req, res) => {
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

// Route GET - /api/user/comments/:user_id
// Get all comments by a single user
router.get('/comment/:user_id', async (req, res) => {
  console.log(`Get all comments made by user ${req.params.user_id}`);
  try{
    const allUserComments = await Comment.findAll({
      where: { user_id: req.params.user_id}
    });
    res.status(200).json(allUserComments);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Route GET - /api/user/comments/:user_id
// Get all comments by a single user
router.get('/article/:user_id', async (req, res) => {
  console.log(`Get all articles made by user ${req.params.user_id}`);
  try{
    const allUserComments = await Article.findAll({
      where: { user_id: req.params.user_id}
    });
    res.status(200).json(allUserComments);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;