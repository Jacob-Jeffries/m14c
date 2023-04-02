const router = require('express').Router();
const { Comment } = require('../../models');

// Create New comment
router.post('/create', async (req, res) => {
  console.log(`\nCreating new comment: \n${req.body.body}.\n`);
  try {
    const createArticle = await Comment.create({
      user_id: req.body.user_id,
      article_id: req.body.article_id,
      body: req.body.body
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

// Read Single Comment
router.get('/:comment_id', async (req, res) => {
  console.log(`\nGetting comment: #${req.params.comment_id}.`);
  try {
    const commentData = await Comment.findByPk(req.params.comment_id)
    res.status(200).json(commentData);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

// Read all comments for single article
router.get('/articleComments/:article_id', async (req, res) => {
  console.log(`\nGetting comments for article: #${req.params.article_id}.`);
  try {
    const commentData = await Comment.findAll({
      where: {
        article_id: req.params.article_id
      }
    })
    res.status(200).json(commentData);
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

// Delete Single Comment
router.delete('/delete/:comment_id', (req, res) => {
  console.log(`Delete comment with id: ${req.params.comment_id}.`);
  try{
    const deleteData = Comment.destroy({
      where: { id: req.params.comment_id }
    });
    res.status(200).json(deleteData);
    }catch(err){
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;