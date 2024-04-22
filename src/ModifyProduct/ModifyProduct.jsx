import './ModifyProduct.css';
import { useState } from 'react';

function ModifyProduct({modifyProduct, closeModal, product}){
    console.log(product);
    const [editedFields,setEditedFields] = useState({
        title: product.title,
        price: product.price,
        description: product.desc,
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
        console.log(product);
        modifyProduct(editedFields);
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