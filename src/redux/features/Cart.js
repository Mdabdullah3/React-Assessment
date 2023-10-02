import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    total: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.price;
        },
        removeOne: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );

            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else {
                state.products = state.products.filter(
                    (product) => product.id !== action.payload.id
                );
            }

            state.total -= action.payload.price;
        },
        removeFromCart: (state, action) => {
            const productToRemove = state.products.find(
                (product) => product.id === action.payload.id
            );

            if (productToRemove) {
                state.total -=
                    action.payload.price * (productToRemove.quantity || 0);
            }

            state.products = state.products.filter(
                (product) => product.id !== action.payload.id
            );
        },
    },
});

export const {
    addToCart,
    removeOne,
    removeFromCart,
} = CartSlice.actions;

export default CartSlice.reducer;
