// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ArticlesPage from './pages/ArticlesPage'; // Ensure you have this page


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/articles" element={<ArticlesPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
