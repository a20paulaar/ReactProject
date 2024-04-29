import './AddProduct.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductThunk } from '../../redux/thunks/productsThunks';
import { useForm } from 'react-hook-form';

function AddProduct({closeModal}){
    const dispatch = useDispatch();
    const { register, handleSubmit, formState : {errors} } = useForm();
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

    const onSubmit = handleSubmit(() => {
        dispatch(addProductThunk(newProduct));
        closeModal();
    });

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
                <form onSubmit={onSubmit}>
                <h2>Añadir nuevo producto</h2>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" onChange={handleInputChange}/>
                <label htmlFor="price">Precio:</label>
                <input type="number" name='price' onChange={handleInputChange}
                {... register('price', {
                    min: { value: 0, message: 'El precio del producto tiene que ser mayor que cero.'}
                  }) }/>
                { errors.price && <span className='login-errors'>{errors.price.message}</span> }
                <label htmlFor="description">Descripción:</label>
                <input type="text" name='description'onChange={handleInputChange}
                {... register('description', {
                    minLength: { value: 6, message: 'La descripción es demasiado corta.'},
                    maxLength: { value: 300, message: 'La descripción es demasiado larga.'}
                  }) }/>
                { errors.description && <span className='login-errors'>{errors.description.message}</span> }
                <label htmlFor="image">URL de la imagen:</label>
                <input type="text" name='image' onChange={handleInputChange}
                {... register('image', {
                    pattern: { value: /\/(\w+)\/(\w+)(\?{1}.*)?$/ , message: 'La url de la imagen es incorrecta.'}
                }) }/>
                { errors.image && <span className='login-errors'>{errors.image.message}</span> }
                <label htmlFor="category">Categoría:</label>
                <input type="text" name='category' onChange={handleInputChange}/>
                <button type='submit' className='save-button'>Guardar</button>
                </form>
            </div>
        </div>
        )
}

export default AddProduct;