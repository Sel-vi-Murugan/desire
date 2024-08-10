import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';
import Navbar from './Navbar';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuyNow = (id) => {
    const item = cart.find(product => product.id === id);
    if (item) {
      // Redirect to product overview page or checkout page
      navigate(`/product/${item.id}`);
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
    // Implement checkout logic here
  };

  return (
    <div className="cart-page">
        <Navbar/>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                <button className="buy-now-button" onClick={() => handleBuyNow(item.id)}>Buy Now</button>
              </div>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
