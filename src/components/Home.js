import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Home.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import HomePage from './HomePage';
import Navbar from './Navbar';
import ShopByCategory from './ShopByCategory';
import TopBrands from './TopBrands';
import ProcessSteps from './ProcessStep';
import CraftsmanshipSection from './CraftsmanshipSection';



export default function Home() {
  return (
    <div>
      <Navbar/>

      <HomePage/>
      <TopBrands/>

      <div className='category'>
        <ShopByCategory/>
      </div>
      <CraftsmanshipSection/>
      <ProcessSteps/>
      <section className="footer">
        <div className="footer-box">
          <h3>Services</h3>
          <a href="#">Email Marketing</a>
          <a href="#">Campaigns</a>
          <a href="#">Brandings</a>
          <a href="#">Offline</a>
        </div>
        <div className="footer-box">
          <h3>About</h3>
          <a href="#">Team</a>
          <a href="#">Benefits</a>
          <a href="#">Our story</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer-box">
          <h3>Help</h3>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-box">
          <h3>Social Media</h3>
          <div className="social">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
      </div>
        </div>
      </section>
      <section className="copyright">
        <p>Copyright 2024 by Desire Pvt Ltd. All rights Reserved.</p>
      </section>
    </div>
  );
}
