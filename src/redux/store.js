import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './features/SearchSlice';
import ProductSlice from './features/ProductSlice';
import CartSlice from './features/CartSlice';
import AddCartSlice from './features/AddCartSlice';

const store = configureStore({
    reducer: {
        search: SearchSlice,
        cart: CartSlice,
        priceRange: ProductSlice,
        addCart: AddCartSlice,
    },
});


export default store;
