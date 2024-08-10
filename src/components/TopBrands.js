import React from 'react';
import '../styles/TopBrands.css';

const categories = [
  { name: 'homade soaps', imageUrl: 'https://i.pinimg.com/564x/0e/4d/ed/0e4ded6f1b0e61a304c776f49f1428af.jpg' },
  { name: 'Planting pots', imageUrl: 'https://i.etsystatic.com/28790764/r/il/f9f6e9/5861758128/il_794xN.5861758128_jtdl.jpg' },
  { name: 'glass candles', imageUrl: 'https://i.pinimg.com/736x/58/4b/2f/584b2fcb9698ff29bc0afe018dddb3dd.jpg' },
  { name: 'teracotta jewellery', imageUrl: 'https://manmarzi.com/cdn/shop/products/IMG_20210923_142132.jpg?v=1714058680&width=600' },
  { name: 'soft toys', imageUrl: 'https://www.kopaipaar.com/wp-content/uploads/2019/07/Animal-Cushions-Home-Page.jpg' },
  { name: 'customized braclets', imageUrl: 'https://i.etsystatic.com/23811996/r/il/c2a3ba/3012802052/il_794xN.3012802052_jo3f.jpg' },
  { name: 'crochet bags', imageUrl: 'https://i.pinimg.com/564x/ac/1e/0e/ac1e0e0659708ccab70b536329f30e33.jpg' },

];

const TopBrands = () => {
  return (
    <div className="product-categories">
      <h2>TopBrands</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className={`category-card category-card-${index + 1}`}>
            <img src={category.imageUrl} alt={category.name} />
            <div className="overlay">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
