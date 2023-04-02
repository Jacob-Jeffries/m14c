const router = require('express').Router();
const { Comment } = require('../../models');

// Create New Article
router.post('/create', async (req, res) => {
  console.log(`\nCreating new article: ${req.body.title}.`);
  try {
    const createArticle = await Article.create({
      user_id: req.body.user_id,
      title: req.body.title,
      body: req.body.text
    });
    res.status(200).json(createArticle);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Read all Comments
router.get('/', async (req, res) => {
  console.log(`\nGetting information for all comments.`);
  try{
    const allComments = await Comment.findAll();
    res.status(200).json(allComments);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Read Single Article
router.get('/:article_id', async (req, res) => {
  console.log(`\nGetting article: #${req.params.user_id}.`);
  try {
    const userData = await Article.findByPk(req.params.article_id)
    res.status(200).json(userData);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Single Article
router.put('/update/:article_id', async (req, res) => {
  console.log(`\nUpdating information for article: #${req.params.article_id}.`);
  try{
    const updateData = await Article.update({
      user_id: req.body.user_id,
      title: req.body.title,
      body: req.body.text
    },{
      where: { id: req.params.article_id }
    });
    res.status(200).json(updateData);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete Single Article
router.delete('/delete/:article_id', (req, res) => {
  console.log(`Delete article with id: ${req.params.user_id}.`);
  try{
    const deleteData = Article.destroy({
      where: { id: req.params.article_id }
    });
    res.status(200).json(deleteData);
    }catch(err){
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;