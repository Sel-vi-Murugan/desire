import React, { useState } from 'react';
import '../styles/AddProducts.css';

const AddProducts = () => {
  const [product, setProduct] = useState({
    productName: '',
    proDescription: '',
    price: '',
    CategoryId: '',
    ratings: '',
    imgSrc: null
  });
  const [error, setError] = useState('');


  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, imgSrc: e.target.files[0] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(product);
    alert('Product added successfully');

    const products = { ...product };

    try {
      const response = await fetch('http://localhost:8080/products/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(products),
      });
      if (response.ok) {
        setError('');
        // const data = await response.json();
      } else {
        setError('Product addition failed! Please check your inputs.');
      }
    } catch (error) {
      console.error('Error during product addition:', error);
      setError('An error occurred during product addition. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="add-product">
        <h2>Add Product</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input type="text" name="productName" value={product.productName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Product Description:</label>
            <textarea name="proDescription" value={product.proDescription} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Category ID:</label>
            <input type="text" name="CategoryId" value={product.CategoryId} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Ratings:</label>
            <input type="number" name="ratings" value={product.ratings} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Product Image:</label>
            <input type="file" name="imgSrc" onChange={handleImageChange} required />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
