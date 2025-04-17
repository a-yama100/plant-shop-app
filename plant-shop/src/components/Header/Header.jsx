import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  // Reduxストアからカートの商品数を取得
  const cartItemsCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Houseplant Haven</Link>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li className="cart-icon-container">
              <Link to="/cart" className="cart-link">
                <div className="cart-icon">
                  <span role="img" aria-label="shopping cart">🛒</span>
                  {cartItemsCount > 0 && (
                    <span className="cart-count">{cartItemsCount}</span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;