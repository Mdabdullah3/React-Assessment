import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    priceRange: 1000
}

const ProductSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
    },
})

export const { setPriceRange } = ProductSlice.actions;

export default ProductSlice.reducer;