import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/Landing/LandingPage';
import ProductList from './pages/ProductList/ProductList';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import './App.css';

function App() {
  return (
    <Router basename="/plant-shop-app">
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;