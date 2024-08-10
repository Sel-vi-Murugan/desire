
// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductTerra from './category/ProductTerra';
import AboutPage from './components/AboutPage';
import CartPage from './components/CartPage';
import Home from './components/Home';
import Login from './components/Login';
import ProductOverview from './components/ProductOverview';
import Products from './components/Products';
import ProfilePage from './components/ProfilePage';
import Signup from './components/Signup';
import AddProducts from './moduleAdmin/AddProducts';
import AddUser from './moduleAdmin/AddUser';
import AdminModule from './moduleAdmin/AdminModule';
import UserList from './moduleAdmin/UserList';
import UserModule from './moduleUser/UserModule';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        {/* <Routes/> */}
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductOverview/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path='/admin' element={<AdminModule/>}/>
        <Route path='/user' element={<UserModule/>}/>
        <Route path='/productTerra' elemment={<ProductTerra/>}/>
        <Route path="/user-list" element={<UserList/>} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/addProduct' element={<AddProducts/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
