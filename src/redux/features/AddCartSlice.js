import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    total: 0,
};

const AddCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            const existingProductIndex = state.products.findIndex(
                (product) => product.id === action.payload.id
            );

            if (existingProductIndex !== -1) {
                // Product already exists in the cart, increase quantity
                const existingProduct = state.products[existingProductIndex];
                const quantityToAdd = action.payload.quantity || 1; // Use 1 if quantity is not provided in payload
                const newQuantity = existingProduct.quantity + quantityToAdd;

                // Update the product with the new quantity
                const updatedProduct = {
                    ...existingProduct,
                    quantity: newQuantity,
                };

                const updatedProducts = [...state.products];
                updatedProducts[existingProductIndex] = updatedProduct;

                return { ...state, products: updatedProducts };
            } else {
                // Product doesn't exist in the cart, add it with the given quantity or 1
                const quantityToAdd = action.payload.quantity || 1; // Use 1 if quantity is not provided in payload
                const newProduct = { ...action.payload, quantity: quantityToAdd };

                return {
                    ...state,
                    products: [...state.products, newProduct],
                };
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload.id
            );
        },
    }
});

export const {
    AddToCart,
    removeFromCart,
} = AddCartSlice.actions;

export default AddCartSlice.reducer;
