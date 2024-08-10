import React from 'react';
import '../styles/Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'John ',
    rating: 5,
    comment: 'Amazing product',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Very satisfied with the Quality.worth for money',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    rating: 3,
    comment: 'Good product.want little more collection',
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      {reviewsData.map(review => (
        <div key={review.id} className="review-card">
          <h3>{review.name}</h3>
          <div className="rating">
            {'⭐'.repeat(review.rating)} 
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
