import React from 'react';
import '../styles/Sidebar.css';
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>Filters</h1>
      <ul>
        <li><a href="/productTerra">Terracotta Jewellery</a></li>
        <li><a href="/jar-candles">Jar Candles</a></li>
        <li><a href="/customized-bracelets">Customized Bracelets</a></li>
        <li><a href="/planting-plots">Planting Plots</a></li>
        <li><a href="/crochet-bags">Crochet Bags</a></li>
        <li><a href="/handmade-soaps">Handmade Soaps</a></li>
        <li><a href="/palm-leaf-products">Palm Leaf Products</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;





// src/components/Sidebar.js

// import React from 'react';
// import '../styles/Sidebar.css'; // Optional: Import styles if needed
// import filterData from '../data/filterData'; // Import filter data

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <h2>Filters</h2>
//       <ul>
//         {filterData.map(filter => (
//           <li key={filter.id}>{filter.name}</li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
