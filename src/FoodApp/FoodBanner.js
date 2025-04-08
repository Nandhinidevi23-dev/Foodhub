import React, { useEffect, useState } from 'react';
import './FoodApp.css';
import SWIGGY_API_DATA from './utils/API';


const FoodBanner = () => {

    const [bannerLists, setBannerLists] = useState([]);

    useEffect(() => {
        // setBannerLists(SWIGGY_API_DATA.menuItems);
        console.log("FoodBanner Mounted!");

        fetchBannerList();
    }, []);

    const fetchBannerList = async () =>{
        try{
            const data =await  fetch(`${process.env.PUBLIC_URL}/Banner.json`);
            const result = await data.json();
            setBannerLists(result.menuItems)
            console.log("banner page console",result.menuItems)

        }
        catch(error){
            console.error("Error fetching restaurant data:", error);
            setBannerLists([]);
        }
    } 
    return (
        <div className='container bannerContainer'>
            <div className='flex-banner'>
                {Array.isArray(bannerLists) &&
                    bannerLists.map((item, index) => (
                        <div className='bannerList'>
                            <img src={item.image} className='bannerImg' />
                            <h3>{item.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>



  )
}

export default FoodBanner