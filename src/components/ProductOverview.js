import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productData from '../data/productsData';
import '../styles/ProductOverview.css';
import Navbar from './Navbar';
import Reviews from './Reviews';

const ProductOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find(p => p.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product ? product.imageUrl : '');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const thumbnails = [
    'https://cdn.shopify.com/s/files/1/0106/4694/5855/products/IMG_20220807_132839.jpg?v=1672169433&width=500',
    'https://cdn.shopify.com/s/files/1/0106/4694/5855/products/IMG_20210517_124756.jpg?v=1716060430&width=360',
    'https://cdn.shopify.com/s/files/1/0106/4694/5855/products/IMG_20220807_132839.jpg?v=1672169433&width=500',
    'https://cdn.shopify.com/s/files/1/0106/4694/5855/products/IMG_20210517_124756.jpg?v=1716060430&width=360',
  ];

  useEffect(() => {
    if (product) {
      // Ensure price is a number
      const price = parseFloat(product.price);
      if (!isNaN(price)) {
        setTotalPrice(price * quantity);
      } else {
        console.error('Product price is not a valid number:', product.price);
      }
    }
  }, [quantity, product]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = { ...product, quantity };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart'); // Redirect to cart page
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar/>
    <div className="product-page">
      <div className="product-images">
        <div className="main-image">
          <img src={mainImage} alt={`Main view of ${product.name}`} />
        </div>
        <div className="thumbnails">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(thumbnail)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <div className="price">
          <span className="current-price">{product.price}</span>
          <span className="discount">51% Off</span>
        </div>
        
        <div className="quantity">
          <button onClick={handleDecreaseQuantity}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>

        <div className="total-price">
          <span>Total Price: ₹{totalPrice.toFixed(2)}</span>
        </div>

        <div className="actions">
          <button className="buy-now">Buy It Now</button>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="delivery">
          <p>Order Delivery by <strong>Monday, 12th August</strong> or earlier.</p>
        </div>

        <div className="badges">
          <div className="badge"><img src='https://t4.ftcdn.net/jpg/04/90/68/41/240_F_490684110_ieKzYAAZWgdgUfU1zz4fAU7SLIWZYjU2.jpg' alt="100% Authentic" />100% Authentic</div>
          <div className="badge"><img src='https://as2.ftcdn.net/v2/jpg/03/72/57/59/1000_F_372575910_pWoG31HF0x1m2EZvm54INJ0JkA4wZUUE.jpg' alt="Free Shipping" />Free Shipping</div>
          <div className="badge"><img src="https://img.freepik.com/premium-vector/easy-returns-sign-label-delivery-service-vector-stock-illustration_100456-11335.jpg?ga=GA1.1.1552438517.1722702017" alt="Easy Returns" />Easy Returns</div>
          <div className="badge"><img src='https://img.freepik.com/premium-vector/label-logo-with-lettering-hand-made-vector-flat-illustrations-modern-stylish-badge-thin-line-inscription-handmade-made-with-love-craft-product-white_206268-252.jpg?ga=GA1.1.1552438517.1722702017&semt=sph' alt="Handmade" />handmaded</div>
        </div>
        <div className="social-share">
          <button>Share on Facebook</button>
          <button>Share on Twitter</button>
          <button>Share on Pinterest</button>
          <button>Share on WhatsApp</button>
        </div>
        <Reviews/>
      </div>
    </div>
    </div>
  );
}

export default ProductOverview;
