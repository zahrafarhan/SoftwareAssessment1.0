const express = require('express');
const router = express.Router();
const Product = require('../models/product'); 
const Article = require('../models/article'); 
router.get('/', async (req, res) => {
  try
   {
    const products = await Product.find();
    const articles = await Article.find(); 

    const articleMap = {};
    articles.forEach(article => {
      articleMap[article.art_id] = article;
    });

    const productsWithInventory = products.map(product => {
      let minQuantity = Infinity; 

      product.contain_articles.forEach(article => {
        const articleData = articleMap[article.art_id];
        if (articleData) {
          const stock = Number(articleData.stock); 
          const amount = Number(article.amount_of); 
          const availableQuantity = Math.floor(stock / amount);
          minQuantity = Math.min(minQuantity, availableQuantity);
        }
      });

      const availableQuantity = minQuantity === Infinity ? 0 : minQuantity;

      return {
        ...product._doc,
        availableQuantity
      };
    });

    res.json(productsWithInventory);
  } catch (err) 
  {
    res.status(500).json({ message: err.message });
  }
});


   
router.put('/sell/:productName', async (req, res) => {
  const { productName } = req.params;

  try 
  {   
    const product = await Product.findOne({ name: productName });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    for (const article of product.contain_articles)
       {
      const articleData = await Article.findOne({ art_id: article.art_id });
      if (articleData) {
        const updatedStock = articleData.stock - article.amount_of;
        if (updatedStock < 0) {
          return res.status(400).json({ message: `Not enough stock for article ${article.art_id}` });
        }
        await Article.updateOne({ art_id: article.art_id }, { stock: updatedStock });
      }
    }

    res.status(200).json({ message: 'Sold' });
  }
   catch (error)
   {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
