import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurantList from "./utils/UseRestaurantList";
import ResCategory from './ResCategory'
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = UseRestaurantList(resId);
  const [showIndex , setShowIndex] = useState(null)



  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =resInfo?.cards?.[2]?.card?.card?.info;
  //    const { name, locality, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card;
  console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
  (c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log("category", categories)

  return (
    <div>
      <h2 className="text-center font-bold text-2xl ">{name}</h2>
      <h4 className="text-center font-bold text-2xl">{cuisines} - {costForTwoMessage}</h4>
      <h2 className="text-center font-bold text-2xl my-3">Menu Page</h2>

      {categories.map((category ,index) => 
        <ResCategory data={category.card.card} 
        showItem = {index === showIndex  }
        //concept: lifing the state up: setOpenIndex(showIndex === index ? null : index); 
        setShowIndex  = {() => setShowIndex(index) 
        }/> 
      )}

     
    </div>
  );
};
export default ResMenu;





//  <ul>
// {itemCards.map((item) => (
//   <li>
//     {item.card.info.name} - {item.card.info.price}
//   </li>
// ))}

// </ul> 