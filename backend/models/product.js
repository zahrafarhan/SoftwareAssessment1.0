const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contain_articles: [{
    art_id: { type: String, required: true },
    amount_of: { type: Number, required: true }
  }],
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema, 'Products'); 
