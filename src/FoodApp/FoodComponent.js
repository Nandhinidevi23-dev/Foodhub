import React from 'react';
import './FoodComponent.css'
import resImg from './Image/res-cardimg1.jpg'
import Header from './Header';
import Body from './Body';
import { Outlet } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import MainDashboard from './MainDashboard';


export const FoodComponent = () => {
  return (
    <div>
      
      <Header/>
      <Outlet />
    </div>
  )
}

