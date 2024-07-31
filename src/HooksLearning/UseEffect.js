import React, { useEffect, useState } from "react";
import './Hooks.css'

function UseEffect() {
    const [productdata, setProductData] = useState(null);
    const [counter, setCounter] = useState(0);

function counterClick(){
    setCounter(counter + 1);
}
    async function fetchAPIData() {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            if (result && result.products) {
                setProductData(result.products);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(counter === 10 ) fetchAPIData()
    }, [counter]);


    console.log(productdata);

    return (
        <div>
            <h1>USE EFFECT LEARNING</h1>
            <button onClick={counterClick}>Counter</button>
            <p><b>{counter}</b></p>
            <ul>
                {productdata && productdata.length > 0
                    ? productdata.map((item) => <li className="fetchData">{item.title}</li>)
                    : null}
            </ul>
        </div>
    );
}

export default UseEffect;
