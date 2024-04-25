import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProducts, modifyProduct, deleteProduct, addProduct } from "../../api/apiProducts";

export const getProductsThunk = createAsyncThunk(
    'products/getProducts',
    async () => {
        return await getProducts()
    }
);

export const addProductThunk = createAsyncThunk(
    'products/addProduct',
    async (product) => {
        return await addProduct(product)
    }
);

export const modifyProductThunk = createAsyncThunk(
    'products/modifyProduct',
    async ({id, modifiedProduct}) => {
        return await modifyProduct({id, modifiedProduct})
    }
);

export const deleteProductThunk = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        await deleteProduct(id)
    }
);