import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
    },
    reducer:{
        addItem : (action,state) => {
            state.items.push(action.payload)
        },
        removeitems : (action,state) => {
            state.items.pop()
        },
        clearcart : (action,state) => {
            state.items.length = 0
        }
    }
});
export const  {addItem,removeitems,clearcart} = cartSlice.actions
export default cartSlice.reducer