import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/HomePage.css';
import img1 from '../assets/download.jpeg';
import img2 from '../assets/crochet1.jpeg';

const HomePage = () => {
    const navigate = useNavigate(); 

    const carouselItems = [
      {
        image: 'https://i.etsystatic.com/inv/1b86b2/5514321927/inv_fullxfull.5514321927_50cniifw.jpg?version=0',
        message: 'Discover our latest collection',
        buttonText: 'Explore',
        link: '/products' 
      },
      {
        image: 'https://i.etsystatic.com/inv/1f60dd/5442192885/inv_fullxfull.5442192885_35bnaqww.jpg?version=0',
        message: 'Trace of Terracotta',
        buttonText: 'Shop Now',
        link: '/products'
      },
      {
        image: img1,
        message: 'Unique Palm leaf products',
        buttonText: 'Shop Now',
        link: '/products'
      },
      {
        image: img2,
        message: 'cute crochet items',
        buttonText: 'Shop Now',
        link: '/products'
      },
    ];

    const handleButtonClick = (link) => {
        navigate(link); // Navigate to the specified route
    };

    return (
      <div className="home-page">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item.image} alt={`Slide ${index + 1}`} />
              <div className="carousel-caption">
                <h2>{item.message}</h2>
                <button 
                  onClick={() => handleButtonClick(item.link)} 
                  className="explore-button"
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default HomePage;
