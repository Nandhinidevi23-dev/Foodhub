import { Menu_API } from "./constant";
import { useEffect, useState } from "react";



const UseRestaurantList = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuAPI();
    }, []);

    const fetchMenuAPI = async () => {
        const data = await fetch(
            Menu_API + resId
        );
        const json = await data.json();
        setResInfo(json.data);
        console.log("MenuJson", json);
    };

    return resInfo
}

export default UseRestaurantList