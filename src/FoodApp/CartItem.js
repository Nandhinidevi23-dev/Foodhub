import { useDispatch, useSelector } from "react-redux"
import { IMAGE_URL } from "./utils/constant";
import CategoryItemList from "./CategoryItemList";
import { clearcart } from "./utils/cartSlices";

const CardItem = () =>{
    const cardItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()

    const handleclear = () =>{
        dispatch(clearcart(cardItems))
    }
    return(
        <div className="w-6/12 bg-orange-200 m-auto">
            <h4 className="text-2xl font-bold text-purple-700 text-center">Cart Items</h4>
            {cardItems.length === 0 && (
                <h1 className="text-2xl font-bold p-4 text-purple-700 text-center">Your Cart is Empty🙁 Add Something</h1>
            )}
           <CategoryItemList items = {cardItems}/>
           <div className="text-center">
           <button className="btn btn-danger m-3" onClick={handleclear}>Clear Cart</button>
           </div>
        </div>
    )
}
export default CardItem