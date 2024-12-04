import React, { useContext, useEffect, useState } from "react";
import resList from "./utils/mockdata";
import ResContainer , {vegRestaurant} from "./ResContainer";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import UseOnlineStatus from "./utils/UseOnlineStatus";
import UserContext from "./utils/UserContext";

const Body = () => {

  const [ListRes, setListRes] = useState([]);
  const [FilterRes, SetFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const VegResData = vegRestaurant(ResContainer);
  const {loggedId, setuserName} = useContext(UserContext)

  function TopRatedClick() {
    const filterListValue = ListRes.filter((res) => res.info.avgRating > 4.5);
    setListRes(filterListValue);
    console.log(filterListValue);
    //you can write like this also
    // setListRes(ListRes.filter((res) => res.rating>4));
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.968499443951313&lng=79.38731130212545&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284&isDineoutCollection=false");

    const result = await data.json();
    console.log("BODY LIST",result)
    setListRes(result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    SetFilterRes(result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };
 
  const onlineStatus = UseOnlineStatus();

  if(onlineStatus === false){
    return <h1>Look Like Your offline Check internet</h1>
  }

  
  if (FilterRes === ([])) {
    return <Shimmer/>
}



  return  (
    <div className="Body">
      <div className="filter-container flex">
        <div className="search-container">
          <input className="border border-solid border-black mr-2" type="text" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === ''){
              const filterdData = ListRes.filter((res) => res.info);
              SetFilterRes(filterdData);
            } 
            
            console.log(searchText);
          }} />

          <button className="px-4 bg-blue-300 py-1 mr-3 rounded-md" onClick={() => {
            const filterdRes = ListRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            SetFilterRes(filterdRes);
            console.log(filterdRes)
          }}>Search</button>

        </div>
        <button className="px-4 bg-blue-300 py-1 rounded-md" onClick={TopRatedClick}>
          Top Rated Restaurant
        </button>

        <div className="flex px-4">
          <label className="px-2">User Name</label>
          <input 
  className="border border-black px-2" 
  value= {loggedId}
  onChange = {(event) => setuserName(event.target.value)} 
/>
        </div>
      </div>
      <div className="flex flex-wrap w-[100%] mt-2 ">
        {FilterRes.map((restaurant) => (
        <Link  key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}> 
        {restaurant.info.veg ? (<VegResData resData = {restaurant}/>) :
       ( <ResContainer resData={restaurant} />)}
       </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;