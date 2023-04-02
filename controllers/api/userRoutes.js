const router = require('express').Router();
const { User } = require('../../models');

// Create New User
router.post('/createUser', async (req, res) => {
  try {
    const userData = await User.create({
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

router.get('/user', async (req, res) => {
  try{
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Read Single User
router.get('/singleUser/:user_id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.user_id)
    res.status(200).json(userData);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Single User
router.put('/updateUser/:user_id', async (req, res) => {
  try{
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;