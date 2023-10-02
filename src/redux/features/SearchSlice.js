// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearchFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSearchFilter } = searchSlice.actions;
export default searchSlice.reducer;
