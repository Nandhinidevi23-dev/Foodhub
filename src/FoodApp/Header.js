import React, { useContext, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { LOGO_URL } from './utils/constant';
import { Link } from 'react-router-dom';
import UseOnlineStatus from './utils/UseOnlineStatus';
import UserContext from './utils/UserContext';
import  {useSelector}  from 'react-redux';
import logoimg from './Image/logoFoodhub.png';
import './FoodApp.css'


const Header = () => {

  const [btnName, setBtnName] = useState("login");
  const onlineStatus = UseOnlineStatus();
  const {loggedId} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart?.items || []);
  console.log(cartItems);
 // Subscribe the store by using Selector - Redux

  function buttonLogin(){
    return btnName=== "login" ? setBtnName("logout") : setBtnName("login")
  }
    return (
      <div className='header-container flex justify-between align-middle shadow-md bg-white-100 mb-3 p-2'>
        <h4 className='text-black font-semibold text-2xl'>Food Hub</h4>
        <ul className='hidden lg:flex lg:menu-list items-center '>
        {/* <li className='px-3 '>Online Status :{onlineStatus ? "🟢" : "🔴"} </li> */}
          <li className='px-2'><Link to="/" className='  font-medium text-lg'>Home</Link></li>
          <li className='px-2'><Link to="/grocery" className=' font-medium text-lg'>Grocery</Link></li>
          <li className='px-2'><Link to="/about" className=' font-medium text-lg'>About Us</Link></li>
          <li className='px-2'><Link to="/contact" className=' font-medium text-lg'>Contact Us</Link></li>
          <li className='px-2 flex'><Link to="/carditem" className=' font-medium text-lg'>Cart-({cartItems.length} item)</Link> </li>
          <li className='px-2'><h3 className=' font-medium text-lg'>{loggedId} </h3></li>
          <li className='px-2'><button className="bg-green-700 px-4 py-2  rounded-md text-white" onClick={() => {buttonLogin()}}>{btnName} </button></li>
        

        </ul>
      </div>
    )
  }

  export default Header;
