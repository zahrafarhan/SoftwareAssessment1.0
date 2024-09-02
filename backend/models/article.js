const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  art_id: { type: String, required: true },
  name: { type: String, required: true },
  stock: { type: Number, required: true } 
});


module.exports = mongoose.model('Article', articleSchema, 'Articles'); 
