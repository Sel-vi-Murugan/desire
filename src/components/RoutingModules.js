import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AdminModule from '../moduleAdmin/AdminModule';
import UserModule from '../moduleUser/UserModule';

export default function RoutingModules() {
  return (
    <div>
        <Router>
          <Routes>
                <Route path='/admin' element={<AdminModule/>}/>
                <Route path='/user' element={<UserModule/>}/>
          </Routes>
        </Router>
    </div>
  )
}
