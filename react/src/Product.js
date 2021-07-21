import './Product.css';
import {useContext} from 'react';
import {CartContext} from './CartContext';

function Product({
  category,
  description,
  id,
  image,
  title,
  price,
  onAddToCart,
}) {
const {addToCart} = useContext(CartContext);

const onDeleteProduct = () => {
    fetch(`/products/${id}`, {
        method: 'delete',
    });
};

const onEditProduct = () =>{
  fetch(`/products/${id}`, {
    method: 'put',
});
}

  return (
    <div className="product">
      <img src={image} className="product-image" />
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => addToCart(id)}>Add to Cart (${price})</button>
      <button onClick= {onDeleteProduct}>Delete Product</button>
      <button onClick= {onEditProduct}>Edit</button>
    </div>
  );
}

export default Product;
