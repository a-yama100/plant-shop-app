import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { plants, categories } from '../../data/plants';
import './ProductList.css';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // カテゴリーフィルター処理
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="product-list-container">
      <h1 className="page-title">Our Plants</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredPlants.map(plant => (
          <div key={plant.id} className="product-grid-item">
            <ProductCard plant={plant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;