import React, { useContext, useEffect, useState } from "react";
import resList from "./utils/mockdata";
import ResContainer, { vegRestaurant } from "./ResContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "./utils/UseOnlineStatus";
import UserContext from "./utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Body = ({ FilterRes,ListRes,setListRes }) => {
  // const [ListRes, setListRes] = useState([]);
   const [reslistdata, SetReslistdata] = useState([]);
   const [bannerList, SetBannerList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const VegResData = vegRestaurant(ResContainer);
  const { loggedId, setuserName } = useContext(UserContext);


      useEffect(() => {
            fetchAPI()
          },[])

      const fetchAPI = async () => {
           try {
            const response = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.968499443951313&lng=79.38731130212545&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const result = await response.json();
            console.log("BODY LIST", result);
        
            // Find the first card that contains restaurant data
            const restaurantbanner = result?.data?.cards.find(
              (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
        
            if (restaurantbanner) {
              const bannerList = restaurantbanner.card.card.gridElements.infoWithStyle.restaurants;
          SetReslistdata(bannerList);
            } else {
              console.error("No restaurant data found in API response");
              
            }
          } catch (error) {
            console.error("Error fetching restaurant data:", error);
            SetReslistdata(bannerList);
          }
       
        };
  

  function TopRatedClick() {
    if(isFiltered){
      setListRes(reslistdata);
      console.log("all list" ,reslistdata)
    }
    else{
      const filterListValue = ListRes.filter((res) => res.info.avgRating > 4.5);
      setListRes(filterListValue);
      console.log(filterListValue);
      //you can write like this also
      // setListRes(ListRes.filter((res) => res.rating>4));
    }
    setIsFiltered(!isFiltered); // Toggle the filter state

  
  }

  const onlineStatus = UseOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Look Like Your offline Check internet</h1>;
  }

  if (FilterRes === ([])) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter-container  text-center m-10 flex justify-between lg:flex justify-between px-3  ">

          <div className="textClass">
          <h2 className="text-[33px] font-bold">Featured Restaurants</h2>
          </div>
          <div className="">
          <button
            className="lg:px-4  py-1 mr-3 rounded-md bg-[] "
            onClick={TopRatedClick}
          >
            Top Rated Restaurant
          </button>
          </div>
          

          {/* <div className="flex px-4">
            <label className="px-2 py-2 border-green-700 font-semibold">
              User Name
            </label>
            <input
              className="border-2 border-green-400 mr-2 rounded-md"
              value={loggedId}
              onChange={(event) => setuserName(event.target.value)}
            />
          </div> */}
       
      </div>


      {/* ***************************************************************************************** */}

      {/* <div class="bannerList">
      {Array.isArray(bannerList) &&
        bannerList.map((restaurant) =>(
          <li key={restaurant.info.id}>{restaurant.info.text}</li>
        ))
      }
      </div> */}
      {/* ***************************************************************************************** */}


      <div className="flex flex-wrap w-[100%] mt-2 ">
        {Array.isArray(FilterRes) &&
          FilterRes.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <VegResData resData={restaurant} />
              ) : (
                <ResContainer resData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
