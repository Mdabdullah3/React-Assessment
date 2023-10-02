import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './features/SearchSlice';
import CartSlice from './features/Cart';
import ProductSlice from './features/ProductSlice';

const store = configureStore({
    reducer: {
        search: SearchSlice,
        cart: CartSlice,
        priceRange: ProductSlice
    },
});


export default store;
