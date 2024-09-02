const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
require('dotenv').config(); 

const app = express(); 
const PORT = process.env.PORT || 5000; 
app.use(express.json()); 
app.use(cors()); 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
const articleRoutes = require('./routes/articles');
const productRoutes = require('./routes/products');
app.use('/articles', articleRoutes);
app.use('/products', productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
