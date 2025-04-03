import React from 'react';
import './FoodApp.css'

const ResContainer = (props) => {
    const { resData } = props;
    const { name, locality, cuisines, costForTwo ,cloudinaryImageId,avgRating} = resData?.info
    return (
      <div className=' p-2 m-2 w-[250px] h-[270px] rounded-lg background-card'>
  
        <img className='w-[250px] h-[150px] object-cover m-auto rounded-lg hover:w-[350px] bg-black transition-all duration-300' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId} />
        <h5 className=' font-bold text-center m-1'>{name}</h5>
        {/* <h4>{locality}</h4> */}
        <div className='bg-white p-2 m-1 rounded '>
        <p>{cuisines.join(", ")}</p>
        <div className='flex justify-between'>
        <p>{costForTwo}</p>
        <p>{avgRating} ⭐</p>
        </div>
        </div>
      </div>
    );
  };


  export const vegRestaurant = (ResContainer) => {
    return(props) =>{
      return(
        <div>
          <h3 className='absolute p-1 m-2  text-white bg-green-500'>Veg Restaturant</h3>
          <ResContainer {...props}/>
        </div>
      )
    }
  }

export default ResContainer