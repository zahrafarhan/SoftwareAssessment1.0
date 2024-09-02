const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
