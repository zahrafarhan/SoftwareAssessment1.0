import React, { useEffect, useState } from 'react';
import { fetchProducts, sellProduct } from '../services/productService';
import { fetchArticles } from '../services/articleService';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const productsData = await fetchProducts();
        const articlesData = await fetchArticles();
        setProducts(productsData);
        setArticles(articlesData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleSellProduct = async (productName) => {
    try 
    {
      await sellProduct(productName);
      alert('Sold');
  
      const updatedProducts = await fetchProducts();
      const updatedArticles = await fetchArticles();
      setProducts(updatedProducts);
      setArticles(updatedArticles);
    } catch (error) 
    {
      alert(`Failed to sell product: ${error.message}`);
    }
  };

  const calculateAvailableQuantity = (product) => {
    const articleMap = new Map();
    articles.forEach(article => {
      articleMap.set(article.art_id, article.stock);
    });

    return product.contain_articles.reduce((minQuantity, article) => {
      const articleStock = articleMap.get(article.art_id) || 0;
      const requiredAmount = article.amount_of;
      const availableQuantity = Math.floor(articleStock / requiredAmount);
      return Math.min(minQuantity, availableQuantity);
    }, Infinity);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="products-container">
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul className="product-list">
          {products.map(product => (
            <li key={product._id} className="product-card">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Available Quantity: {calculateAvailableQuantity(product)}</p>
              <ul>
                {product.contain_articles.map(article => (
                  <li key={article.art_id}>
                    Article ID: {article.art_id}, Amount: {article.amount_of}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleSellProduct(product.name)}>Sell</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsPage;
