import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/Landing/LandingPage'; // 後で作成予定
import ProductList from './pages/ProductList/ProductList'; // 後で作成予定
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'; // 後で作成予定
import './App.css';

function App() {
  return (
    <Router>
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