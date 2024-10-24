import React from 'react'

const ResContainer = (props) => {
    const { resData } = props;
    const { name, locality, cuisines, costForTwo ,cloudinaryImageId,avgRating} = resData?.info
    return (
      <div className=' p-2 m-2 w-[250px] h-[300px] bg-pink-50 rounded-lg '>
  
        <img className='w-[250px] h-[150px] object-cover m-auto rounded-lg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId} />
        <h4>{name}</h4>
        <h4>{locality}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} ⭐</h4>
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