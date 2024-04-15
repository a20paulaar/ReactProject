import './AddProduct.css';
import { useState } from 'react';

function AddProduct({closeModal}){

   /* const [newProduct, setNewProduct] = useState({
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
        addProduct(newProduct);
        closeModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((oldProduct) => ({
            ...oldProduct,
            [name]: value
        }));
    };*/

    return(
        <div className='add-product-modal'>
            <div className='add-product-form'>
                <form onSubmit={closeModal}>
                <h2>Añadir nuevo producto</h2>
                <label htmlFor="productTitle">Título:</label>
                <input type="text" name="productTitle"/>
                <label htmlFor="productPrice">Precio:</label>
                <input type="text" name='productPrice'/>
                <label htmlFor="productDesc">Descripción:</label>
                <input type="text" name='productDesc'/>
                <label htmlFor="productImg">URL de la imagen:</label>
                <input type="text" name='productImg'/>
                <label htmlFor="productCateg">Categoría:</label>
                <input type="text" name='productCateg'/>
                <label htmlFor="productRate">Valoraciones:</label>
                <input type="text" name='productRate'/>
                <label htmlFor="productRateNum">Número de valoraciones:</label>
                <input type="text" name='productRateNum'/>
                <button type='submit' className='save-button'>Guardar</button>
                </form>
            </div>
        </div>
        )
}

export default AddProduct;