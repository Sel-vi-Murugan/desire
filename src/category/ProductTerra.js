import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/productsData';
import '../styles/Products.css';
import Sidebar from '../components/Sidebar';

// Renamed to start with an uppercase letter
const ProductTerra = () => {
  const [products, setProducts] = useState(productData);
  const [sortOption, setSortOption] = useState('best-sellers');

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    let sortedProducts = [...products];
    if (selectedOption === 'price-low-high') {
      sortedProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (selectedOption === 'price-high-low') {
      sortedProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    } else if (selectedOption === 'best-sellers') {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Listing</h1>
      </header>
      <div className="content">
        <Sidebar />
        <main className="product-list">
          <div className="sort-options">
            <label>Sort by:</label>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="best-sellers">Best Sellers</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>Rating: {product.rating}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="view-product-btn">View Product</button>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductTerra;
