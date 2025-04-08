import React, { useState } from 'react';
import sectionImg from './Image/sectionImg.png'
import {Search} from 'react-bootstrap-icons';

const HeaderSection = ({searchvalue , setSearchValue}) => {

  return (
    <div className=''>
        <div className="sectioncontainer ">
            <div className="d-flex ">
              <div className='content-section '>
                <h4 className='text-white'>Discover restaurants that food deliver near you</h4>
                <div className='flex'>
                  <div>
                <input type="text" className="searchBar text-white" placeholder="Search for restaurants" 
                 value={searchvalue}
                onChange={(e) => setSearchValue(e.target.value)} />
                <Search className='searchicon'/>
                </div>
                <button className='btn-search'>Search</button>
                </div>
              </div>
              <div>
                <img src={sectionImg} alt="section Image"  class="w-[450px] hidden lg:block"/>
              </div>
            </div>
            {/* <div class="custom-shape-divider-bottom-1740726810">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
        </div>
    </div>
  )
}

export default HeaderSection