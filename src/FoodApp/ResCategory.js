import { useState } from "react";
import CategoryItemList from "./CategoryItemList"

const ResCategory = ({data , showItem , setShowIndex }) => {
   
 
    const handleClickList = () =>{
        
       setShowIndex();
       
    }
    return(
        <div>
            <div className="w-7/12 bg-orange-200 shadow-sm mx-auto my-3 p-3 ">
            <div className="flex justify-between">
                <span className="font-bold text-xl text-purple-700" onClick = {handleClickList}>
                    {data.title}({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
          {  showItem && <CategoryItemList items ={data.itemCards}/>}
            </div>
        </div>
    )
}

export default ResCategory;