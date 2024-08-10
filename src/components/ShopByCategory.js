import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ShopByCategory.css';

const categories = [
  { id: 1, name: 'Terracotta Jewellery', icon: 'https://anjosfashions.com/wp-content/uploads/2024/07/1000216369.jpg' },
  { id: 2, name: 'Crochet bags', icon: 'https://i.etsystatic.com/18737476/r/il/b67a1a/5388500811/il_794xN.5388500811_g78n.jpg' },
  { id: 3, name: 'Homemade Soaps', icon: 'https://i.pinimg.com/564x/4a/f5/db/4af5dbebc6210e37c644c9887b57b54e.jpg' },
  { id: 4, name: 'Bracelets', icon:'https://i.etsystatic.com/12009320/r/il/a29169/5784041507/il_794xN.5784041507_59f7.jpg' },
  { id: 5, name: 'Palm leaf Baskets', icon: 'https://i.pinimg.com/originals/9b/8d/4e/9b8d4ec692a17d0d0cb0076a50a9f774.jpg' },
  { id: 6, name: 'Jar candles', icon: 'https://i.etsystatic.com/25832017/r/il/28632f/3624370411/il_794xN.3624370411_qzdr.jpg'},
]

const ShopByCategory = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <div className="shop-by-category">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => handleCategoryClick(category.name)}>
            <img src={category.icon} alt={category.name} className="category-icon" />
            <div className="image-overlay"></div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
