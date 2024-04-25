import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './slices/productsSlice';

const store = configureStore({
    reducer: {
        products: productsSlice,
    },
    devTools: true
});

export default store;