import axios from 'axios';

// Adjust API_URL for articles
const API_URL =  'http://localhost:5000/articles';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Fetched Articles:', response.data); // Debugging line
    return response.data; // Ensure this matches your API response
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
