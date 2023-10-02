import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
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


export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
