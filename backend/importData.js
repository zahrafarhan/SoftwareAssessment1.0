const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Article = require('./models/article');
const Product = require('./models/product');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/warehouse'; // Adjust if necessary

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const importData = async () => {
  try {
    // Read JSON files
    const articlesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'inventory.json'), 'utf-8')).inventory;
    const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf-8')).products;

    // Ensure amount_of is a number in products data
    productsData.forEach(product => {
      product.contain_articles.forEach(article => {
        article.amount_of = Number(article.amount_of); // Convert to number
      });
    });

    // Import articles
    await Article.deleteMany();
    await Article.insertMany(articlesData);

    // Import products
    await Product.deleteMany();
    await Product.insertMany(productsData);

    console.log('Data imported successfully');
    process.exit();
  } catch (err) {
    console.error('Error importing data:', err);
    process.exit(1);
  }
};

importData();
