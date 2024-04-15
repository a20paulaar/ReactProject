import './ModifyProduct.css';
import useProducts from '../customHooks/useProducts';
function ModifyProduct(closeModal){
    
    return(
        <div className='add-product-modal'>
            <div className='modify-product-form'>
                <form onSubmit={closeModal}>
                <h2>Modificar producto</h2>
                <label htmlFor="productTitle">Título:</label>
                <input type="text" name="productTitle"/>
                <label htmlFor="productPrice">Precio:</label>
                <input type="text" name='productPrice'/>
                <label htmlFor="productDesc">Descripción:</label>
                <input type="text" name='productDesc'/>
                <label htmlFor="productImg">Imagen:</label>
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

export default ModifyProduct;