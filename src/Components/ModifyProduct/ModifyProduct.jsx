import './ModifyProduct.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyProductThunk } from '../../redux/thunks/productsThunks';

function ModifyProduct({ closeModal, product}){
    const dispatch = useDispatch();
    const [editedFields,setEditedFields] = useState({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedFields((oldFields) => ({
            ...oldFields,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            ...product,
            ...editedFields
        };
        console.log(updatedProduct);
        // Importante: Mandar los parámetros como un objeto!
        dispatch( modifyProductThunk({ id: product.id, modifiedProduct: updatedProduct }));
        closeModal();
    };

    return(
        <div className='add-product-modal'>
            <div className='modify-product-form'>
                <form onSubmit={handleSubmit}>
                <h2>Modificar producto</h2>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" onChange={handleInputChange} value={editedFields.title}/>
                <label htmlFor="price">Precio:</label>
                <input type="text" name='price'onChange={handleInputChange} value={editedFields.price}/>
                <label htmlFor="description">Descripción:</label>
                <input type="text" name='description' onChange={handleInputChange} value={editedFields.description}/>
                <button type='submit' className='save-button'>Guardar</button>
                </form>
            </div>
        </div>
        )
}

export default ModifyProduct;