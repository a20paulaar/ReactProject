import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error("Error loading your products:", error);
        }
    }

    const deleteProduct = async (id) => {
        try{
            await axios.delete(`${API_URL}/${id}`);
            setProducts((oldProducts) => {
                oldProducts.filter((product => product.id !== id))
            });
        } catch (error) {
            console.error("Error deleting product:" , error);
        }
    };

    const modifyProduct = async (id, modifiedProduct) => {
        try{
            const response = await axios.put(`${API_URL}/${id}`, modifiedProduct);
            const updatedProduct = {
                ...response.data
            };
            setProducts((oldProducts) => {
                oldProducts.map((product) => product.id === id ? updatedProduct : product);
            })
        } catch(error){
            console.error("Error updating your product");
        }
    }

    const addProduct = async (product) => {
        try{
            const response = await axios.post(API_URL, product);
            const newProduct = response.data;
            setProducts((oldProducts) => [...oldProducts, newProduct]);
        } catch (error){
            console.error("Error adding a new product");
        }
    }

    return(
        <ProductsContext.Provider value={{products, getProducts, addProduct, deleteProduct, modifyProduct}}>
            {children}
        </ProductsContext.Provider>
    )
};
