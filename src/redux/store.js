import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './features/SearchSlice';

const store = configureStore({
    reducer: {
        search: SearchSlice
    },
});


export default store;
