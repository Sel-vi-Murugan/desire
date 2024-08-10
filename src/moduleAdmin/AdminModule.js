import React from 'react';
import Navbar from '../components/Navbar';
import UserList from './UserList';

export default function AdminModule() {
  return (
    <div>
      <Navbar/>
      <UserList/>
    </div>
  )
}
