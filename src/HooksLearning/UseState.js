import React, { useState } from "react";
const initialState = false;
const initialformState = {
    name : "",
    city : ""

}
const UseState = () => {
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(initialState);
    const [formData, setformData] = useState(initialformState);
    function counterClick() {
        setCounter(counter + 1);
    } 

    function togglechange() {
        setToggle(!toggle);
    }
    // console.log(toggle);

    function handlenameChange(event){
        setformData({
            ...formData ,
            name : event.target.value
        })
    }

    function handlecityChange(event){
        setformData({
            ...formData ,
            city : event.target.value
        })
    }

    console.log(formData) 

    return (
        <div>
            <h1>USE STATE LEARNING</h1>
            <h3>COUNTER VALUE</h3>
            <p>My counting value is : {counter}</p>
            <button onClick={counterClick}>Increase</button>

            <h3>CHANGE THE VALUE FALSE INTO TRUE</h3>
            {toggle ? <p>I am true</p> : null}
            <button onClick={togglechange}>Toggle button</button>

            <h3>CHAGING A NAME AND CITY</h3>
            <input type="text" name="name" value={formData.name} onChange={handlenameChange}/>
            <select name ="city" value={formData.city} onChange={handlecityChange}>
                <option value="mumbai">Mumbai</option>
                <option value="chennai">chennai</option>
                <option value="bangalore">Bangalore</option>
            </select>

            <p><b>My Name is {formData.name}</b></p>
            <p><b>Iam from {formData.city}</b></p>
        </div>
    );
};

export default UseState;
