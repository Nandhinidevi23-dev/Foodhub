import React from 'react'

const ResContainer = (props) => {
    const { resData } = props;
    const { name, locality, cuisines, costForTwo ,cloudinaryImageId,avgRating} = resData?.info
    return (
      <div className=' p-2 m-2 w-[250px] h-[270px] bg-orange-200 rounded-lg '>
  
        <img className='w-[250px] h-[150px] object-cover m-auto rounded-lg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId} />
        <h4 className='text-purple-700 font-bold text-center text-md'>{name}</h4>
        {/* <h4>{locality}</h4> */}
        <div className='bg-white p-2 m-1 rounded '>
        <h4>{cuisines.join(", ")}</h4>
        <div className='flex justify-between'>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} ⭐</h4>
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