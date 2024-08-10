import React from 'react';
import '../styles/AboutPage.css'; 
import img from '../assets/download.jpeg'

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="breadcrumb">
                <p> About Desire-CraftedByHer</p>
            </div>
            <h1>Desire-CraftedByHer</h1>
            <p className="about-description">
                This project Desire-CraftedByHer aims to create an online platform for homemakers and small-scale women entrepreneurs, 
                providing them with a space to showcase and sell handmade products. The primary goal is to empower women in rural areas 
                by broadening their market reach, promoting local craftsmanship, and supporting them in achieving financial independence. 
                The website will serve as a bridge between artisans and consumers, facilitating the direct collection and distribution of products 
                from the makers' homes. This initiative not only aims to enhance the business growth of individual entrepreneurs but also contributes 
                to the larger goal of women's empowerment and economic development in village communities.
                <br/><br/>
                The name "Desire-CraftedByHer" beautifully captures the essence of empowering women to achieve their desires for independence and financial stability.
                It reflects the platform's mission to support and celebrate the entrepreneurial spirit of women, creating a hub for their dreams and aspirations.
            </p>
            <div className="craftsmanship-section">
                <div className="craftsmanship-image">
                    <img src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/04/women1.jpg" alt="Craftsmanship" />
                </div>
                <div className="craftsmanship-content">
                    <h2>Unique Craftsmanship</h2>
                    <p>
                    Each product is meticulously handcrafted by skilled artisans, ensuring that every piece is a unique work of art. The dedication and expertise involved in the creation process result in products that stand out for their exceptional quality.
                    </p>
                </div>
                
            </div>
            <div className="craftsmanship-section">
                
                <div className="craftsmanship-content">
                    <h2>Art of Quality</h2>
                    <p>
                        We bring together incredible skills of artisans and master craftsmen from remote corners of the country who have inherited 
                        and perfected their art over generations. These artists are identified, selected and mentored by us to create stunningly 
                        beautiful pieces of handicraft that enhance the beauty of your homes.
                    </p>
                </div>
                <div className="craftsmanship-image">
                    <img src={img} alt="Craftsmanship" />
                </div>
                
            </div>
            <div className="craftsmanship-section">
                
                <div className="craftsmanship-content-lft">
                    <h2>Our Vision</h2>
                    <p>
                    Our vision is to empower women artisans from rural and underserved communities by providing them with a global platform to showcase their unique handcrafted products and enhance their economic opportunities. We aim to celebrate and preserve local craftsmanship while promoting a sustainable and eco-friendly marketplace. By fostering a supportive community through mentorship and skill-building programs, we seek to drive social impact, improve livelihoods, and contribute to the economic development of village communities worldwide.
                    </p>
                </div>
                
                <div className="craftsmanship-content-lft">
                    <h2>Our Mission</h2>
                    <p>
                    Our mission is to create a user-friendly online marketplace that bridges the gap between talented women artisans and a global audience. We are committed to supporting their growth through quality control, training in essential business skills, and providing networking opportunities. By promoting sustainability and eco-friendly practices, we aim to enhance the visibility of unique handmade products and drive economic development, ultimately contributing to women’s empowerment and social impact.
                    </p>
                </div>
               
                
            </div>
        </div>
    );
};

export default AboutPage;
