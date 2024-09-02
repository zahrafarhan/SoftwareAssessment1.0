// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <main>
        <h2>Welcome to the Warehouse App</h2>
        <nav>
          <ul>
            <li><Link to="/products">View Products</Link></li>
            <li><Link to="/articles">View Articles</Link></li> 
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Home;
