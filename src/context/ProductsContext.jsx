import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error loading your products:", error);
        } finally{
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }

    const deleteProduct = async (id) => {
        try{
            setLoading(true);
            await axios.delete(`${API_URL}/${id}`);
            setProducts((oldProducts) => {
                oldProducts.filter((product => product.id !== id-1))
            });
        } catch (error) {
            console.error("Error deleting product:" , error);
        } finally {
            setLoading(false);
        }
    };

    const modifyProduct = async (id, modifiedProduct) => {
        try{
            setLoading(true);
            const response = await axios.put(`${API_URL}/${id}`, modifiedProduct);
            const updatedProduct = {
                ...response.data
            };
            setProducts((oldProducts) => {
                oldProducts.map((product) => product.id === id ? updatedProduct : product);
            })
        } catch(error){
            console.error("Error updating your product");
        } finally{
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }

    const addProduct = async (product) => {
        try{
            setLoading(true);
            const response = await axios.post(API_URL, product);
            const newProduct = response.data;
            setProducts((oldProducts) => [...oldProducts, newProduct]);
        } catch (error){
            console.error("Error adding a new product");
        } finally{
            setLoading(false);
        }
    }

    return(
        <ProductsContext.Provider value={{products, loading, getProducts, addProduct, deleteProduct, modifyProduct}}>
            {children}
        </ProductsContext.Provider>
    )
};
