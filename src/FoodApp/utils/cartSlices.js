import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
      items: [],
    },
    reducers:{
        addItem : (state,action) => {
            state.items.push(action.payload)
        },
        removeitems : (state,action) => {
            state.items.pop()
        },
        clearcart : (state,action) => {
            state.items.length = 0
        }
    }
});
export const{ addItem,removeitems,clearcart } = cartSlice.actions
export default cartSlice.reducer