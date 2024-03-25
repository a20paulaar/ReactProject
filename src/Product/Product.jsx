import './Product.css';

const Product = (props) => {
    return(
        <div className='product-card'>
            <div className='product-img' style={{ backgroundImage: `url('${props.image}')`, backgroundSize: 'cover'}}></div>
            <div className='product-title'>{props.title}</div>
            <p className='product-description'>{props.desc}</p>
            <p className='product-price-tag'>&#36; {props.price}</p>
        </div>
    )
}

export default Product;

