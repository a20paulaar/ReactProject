import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    } 
};

export const deleteProduct = async (id) => {
    try{
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw error;
    }
};

export const modifyProduct = async (id, modifiedProduct) => {
    try{
        const response = await axios.put(`${API_URL}/${id}`, modifiedProduct);
        console.log(id, modifiedProduct);
        return response.data;
    } catch(error){
       throw error;
    }
};

export const addProduct = async (product) => {
    try{
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error){
        throw error;
    }
};