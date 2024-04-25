import { createSlice } from "@reduxjs/toolkit";

import { getProductsThunk, getProductByIdThunk, addProductThunk, deleteProductThunk, modifyProductThunk } from "../thunks/productsThunks";

const initialState = {
    products: [],
    loading: false,
    error: null,
    selectedProduct: {}
}

const pendingMatcher = (action) => {
    action.type.endsWith('/pending')
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        resetSelectedProduct: (state) => {
            state.selectedProduct = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.fulfilled, (state, action)=> {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductsThunk.rejected, (state) => {
                state.loading = false;
                state.error = 'Error al cargar productos.'

            })
            .addCase(getProductByIdThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(getProductByIdThunk.rejected, (state, action) => {
                state.loading = false;
                const id = action.meta.arg;
                state.error = `Error al cargar el producto con id: ${id}.`
            })
            .addCase(modifyProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                const updatedProduct = {
                    ...action.payload
                };
                state.products = state.products.map((product) => {
                    product.id === updatedProduct.id ? updatedProduct : product;
                }
                );

            })
            .addCase(modifyProductThunk.rejected, (state) => {
                state.loading = false;
                state.error = 'Error al guardar las modificaciones'

            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                const deletedProductId = action.meta.arg;
                state.products = state.products.filter(
                    (product) => product.id !== deletedProductId
                );
            })
            .addCase(deleteProductThunk.rejected, (state) => {
                state.loading = false;
                state.error = 'Error al borrar el producto'

            })
            .addCase(addProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                const newProduct = action.payload;
                state.products = [...state.products, newProduct];
            })
            .addCase(addProductThunk.rejected, (state) => {
                state.loading = false;
                state.error = 'Error al añadir el producto.'
            })
            .addMatcher(pendingMatcher, (state) => {
                state.loading = true;
                state.error = null;
            });
    }
});

export const { setSelectedProduct, resetSelectedProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;
export const selectSelectedProduct = (state) => state.products.selectedProduct;

export default productsSlice.reducer;