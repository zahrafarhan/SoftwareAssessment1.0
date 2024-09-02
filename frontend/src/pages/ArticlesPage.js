import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../services/articleService';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading articles: {error.message}</div>;

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        <ul className="article-list">
          {articles.map(article => (
            <li key={article.art_id} className="article-card">
              <h3>{article.name}</h3>
              <p>Stock: {article.stock}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticlesPage;
