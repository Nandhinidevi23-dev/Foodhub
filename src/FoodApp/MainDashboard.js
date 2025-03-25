import React, { useEffect, useState } from 'react'
import HeaderSection from './HeaderSection'
import Body from './Body';
import API_List from './utils/API';
import SWIGGY_API_DATA from "./utils/API";
import FoodBanner from './FoodBanner';


const MainDashboard = () => {

    const [searchValue,setSearchValue] = useState("");
      const [listRes, setListRes] = useState([]);
      const [filterRes, SetFilterRes] = useState([]);
      const [loading, setLoading] = useState(true);


      
        useEffect(() => {
          fetchRestaurants()
        }, [])





        const fetchRestaurants = async () => {
          try {
            const response = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.968499443951313&lng=79.38731130212545&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const result = await response.json();
            console.log("BODY LIST", result);
        
            // Find the first card that contains restaurant data
            const restaurantCard = result?.data?.cards.find(
              (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
        
            if (restaurantCard) {
              const restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
              setListRes(restaurants);
              SetFilterRes(restaurants);
            } else {
              console.error("No restaurant data found in API response");
              
            }
          } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setListRes([]);
            SetFilterRes([]);
          }
        };
        

      useEffect(() =>{
        const filteredRestaurants = listRes.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        SetFilterRes(filteredRestaurants);
        console.log("maindashboard filter",filteredRestaurants)
      },[searchValue , listRes])
   

  return (
    <div>
        <HeaderSection searchValue={searchValue} setSearchValue={setSearchValue}/>
        <FoodBanner/>
        <Body FilterRes = {filterRes} ListRes={listRes} setListRes ={setListRes}/>
    </div>
  )
}

export default MainDashboard