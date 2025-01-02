import React, { useContext, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { LOGO_URL } from './utils/constant';
import { Link } from 'react-router-dom';
import UseOnlineStatus from './utils/UseOnlineStatus';
import UserContext from './utils/UserContext';
import  {useSelector}  from 'react-redux';
import logoimg from './Image/logoFoodhub.png'


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
      <div className='flex justify-between shadow-md bg-white-100 mb-3'>
        <img className="w-23" src={logoimg} />
        <ul className='menu-list flex items-center'>
        {/* <li className='px-3 '>Online Status :{onlineStatus ? "🟢" : "🔴"} </li> */}
          <li className='px-2'><Link to="/" className='text-orange-600 font-semibold text-lg'>Home</Link></li>
          <li className='px-2'><Link to="/grocery" className='text-orange-600 font-semibold text-lg'>Grocery</Link></li>
          <li className='px-2'><Link to="/about" className='text-orange-600 font-semibold text-lg'>About Us</Link></li>
          <li className='px-2'><Link to="/contact" className='text-orange-600 font-semibold text-lg'>Contact Us</Link></li>
          <li className='px-2 flex'><Link to="/carditem" className='text-orange-600 font-semibold text-lg'>Cart-({cartItems.length} item)</Link> </li>
          <li className='px-2'><h3 className='text-orange-600 font-semibold text-lg'>{loggedId} </h3></li>
          <li className='px-2'><button className="px-4 py-2 bg-purple-600 rounded-md text-white" onClick={() => {buttonLogin()}}>{btnName} </button></li>
        

        </ul>
      </div>
    )
  }

  export default Header;
