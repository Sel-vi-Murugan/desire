import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductOverview from '../components/ProductOverview';
import Products from '../components/Products';
import Home from '../components/Home';

export default function UserModule() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Products" element={<Products/>} />
            <Route path="/product/:id" element={<ProductOverview/>} />
        </Routes>
    </div>
  )
}
