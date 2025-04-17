import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './ProductCard.css';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  // カートにすでに追加されているか確認
  const isInCart = cartItems.some(item => item.id === plant.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      thumbnail: plant.image
    }));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={process.env.PUBLIC_URL + plant.image} 
          alt={plant.name} 
          className="product-image" 
          loading="lazy"
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-category">Category: {plant.category}</p>
        <p className="product-price">${plant.price.toFixed(2)}</p>
        <p className="product-description">{plant.description}</p>
        <button 
          className={`add-to-cart-btn ${isInCart ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;