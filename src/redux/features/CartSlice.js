import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddToquantity: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeOne: (state, action) => {
            const itemToRemove = state.find(item => item.id === action.payload.id);
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    itemToRemove.quantity -= 1;
                } else {
                    return state.filter(item => item.id !== action.payload.id);
                }
            }
        },
    },
});


export const { AddToquantity, removeOne } = CartSlice.actions;

export default CartSlice.reducer;
