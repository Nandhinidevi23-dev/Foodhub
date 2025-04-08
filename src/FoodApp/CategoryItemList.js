import { useDispatch } from "react-redux";
import { IMAGE_URL } from "./utils/constant";
import { addItem } from "./utils/cartSlices";
import { useEffect } from "react";




const CategoryItemList = ({ items ,dummy}) => {
    
    const dispatch = useDispatch();



  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

    return (
        <div>

            {items.map((item) => (
                <div className="flex justify-between p-2 m-2 border-b-4">
                    <div className=" w-9/12 ">
                        <span className="text-lg font-semibold py-2">{item.card.info.name}</span> -
                        <span className="text-lg font-semibold py-2">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultprice}  </span>
                        <div>
                            <p className="py-2">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12  p-4">
                        <img src={IMAGE_URL + item.card.info.imageId} className="w-[300px]" />
                        <button className="text-white px-3 mx-4"    onClick={() => handleAddItem(item)}>Add</button>
                    </div>





                </div>
            ))}
        </div>
    )
}
export default CategoryItemList;