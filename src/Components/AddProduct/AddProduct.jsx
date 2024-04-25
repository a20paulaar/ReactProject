import './AddProduct.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductThunk } from '../../redux/thunks/productsThunks';

function AddProduct({closeModal}){
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProductThunk(newProduct));
        closeModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((oldProduct) => ({
            ...oldProduct,
            [name]: value
        }));
    };

    return(
        <div className='add-product-modal'>
            <div className='add-product-form'>
                <form onSubmit={handleSubmit}>
                <h2>Añadir nuevo producto</h2>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" onChange={handleInputChange}/>
                <label htmlFor="price">Precio:</label>
                <input type="number" name='price' onChange={handleInputChange}/>
                <label htmlFor="description">Descripción:</label>
                <input type="text" name='description'onChange={handleInputChange}/>
                <label htmlFor="image">URL de la imagen:</label>
                <input type="text" name='image' onChange={handleInputChange}/>
                <label htmlFor="category">Categoría:</label>
                <input type="text" name='category' onChange={handleInputChange}/>
                <button type='submit' className='save-button'>Guardar</button>
                </form>
            </div>
        </div>
        )
}

export default AddProduct;