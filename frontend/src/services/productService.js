const API_URL = 'http://localhost:5000/products'; 

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');

  }
  return response.json();
};

export const fetchArticles = async () => {

  const response = await fetch('http://localhost:5000/articles');
  if (!response.ok) {
    throw new Error('Failed to fetch articles');

  }
  return response.json();
};

export const sellProduct = async (productName) => {
  const response = await fetch(`${API_URL}/sell/${encodeURIComponent(productName)}`, {
    method: 'PUT',

  });

  if (!response.ok) {
    throw new Error('Failed to sell product');
    
  }

  return response.json(); 
};
