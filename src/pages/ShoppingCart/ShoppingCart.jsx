import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/cartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // 数量増加ハンドラー
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  // 数量減少ハンドラー
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // 商品削除ハンドラー
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // チェックアウトハンドラー
  const handleCheckout = () => {
    alert('Coming Soon! This feature will be available in future updates.');
  };

  return (
    <div className="shopping-cart-container">
      <h1 className="page-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping-btn">
            Explore Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <div className="summary-item">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-item">
              <span>Total Cost:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={process.env.PUBLIC_URL + item.thumbnail} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)} each</p>
                </div>
                <div className="item-quantity">
                  <button
                    className="quantity-btn decrease"
                    onClick={() => handleDecrease(item.id)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn increase"
                    onClick={() => handleIncrease(item.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                  aria-label="Remove item"
                >
                  <span>×</span>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;