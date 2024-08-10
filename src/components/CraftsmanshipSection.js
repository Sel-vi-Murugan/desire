import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const CraftsmanshipSection = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/about'); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>INCREDIBLE SKILLS</h2>
        <h1 style={styles.subtitle}>Unique Craftsmanship</h1>
        <p style={styles.description}>
          We bring together incredible skills of artisans and master craftsmen from remote corners of the country who have inherited and perfected their art over generations. These artists are identified, selected and mentored by us to create stunningly beautiful pieces of handicraft that enhance the beauty of your homes.
        </p>
        <button style={styles.button} onClick={handleKnowMoreClick}>
          KNOW MORE
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="https://csrbox.org/company/proj_img/1610973776empowerment.jpg"
          alt="Craftsmanship"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px',
    backgroundColor: '#f3f3f3',
  },
  textContainer: {
    maxWidth: '50%',
    textAlign: 'center', // Center-align text and button
  },
  title: {
    color: '#A7A7A7',
    fontSize: '18px',
    letterSpacing: '2px',
  },
  subtitle: {
    color: '#333',
    fontSize: '36px',
    margin: '10px 0',
  },
  description: {
    color: '#555',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#8C8F4F',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block', // Ensure the button remains centered
  },
  imageContainer: {
    maxWidth: '45%',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    filter: 'brightness(1.2)',
  },
};

export default CraftsmanshipSection;
