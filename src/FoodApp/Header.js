import React, { useContext, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { LOGO_URL } from './utils/constant';
import { Link } from 'react-router-dom';
import UseOnlineStatus from './utils/UseOnlineStatus';
import UserContext from './utils/UserContext';
import  {useSelector}  from 'react-redux';


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
      <div className='flex justify-between shadow-md bg-pink-100 mb-3'>
        <img className="w-28" src={LOGO_URL} />
        <ul className='menu-list flex items-center'>
        <li className='px-3 '>Online Status :{onlineStatus ? "🟢" : "🔴"} </li>
          <li className='px-2'><Link to="/">🏠Home</Link></li>
          <li className='px-2'><Link to="/grocery">🛒Grocery</Link></li>
          <li className='px-2'><Link to="/about">🤵About Us</Link></li>
          <li className='px-2'><Link to="/contact">📞Contact Us</Link></li>
          <li className='px-2 flex'><Link to="/carditem">Cart-({cartItems.length} item)</Link> </li>
          <li className='px-2'>{loggedId}</li>
          <li className='px-2'><button className="px-4 py-2 bg-pink-700 rounded-md text-white" onClick={() => {buttonLogin()}}>{btnName} </button></li>
        

        </ul>
      </div>
    )
  }

  export default Header;
