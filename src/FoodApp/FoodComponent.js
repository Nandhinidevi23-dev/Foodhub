import React from 'react';
import './FoodComponent.css'
import resImg from './Image/res-cardimg1.jpg'
import Header from './Header';
import Body from './Body';
import { Outlet } from 'react-router-dom';


export const FoodComponent = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

