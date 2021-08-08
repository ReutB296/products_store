
import {useContext} from 'react';
import {CartContext} from './CartContext';
import {
  Link,
} from "react-router-dom";
import styled from 'styled-components';

export default function Product({
  category,
  description,
  id,
  image,
  title,
  price,
  onAddToCart,
}) {

const StyledProduct = styled.div
`width: 300px;
border: 1px solid #ccc;
border-radius: 10px;
margin: 5px;
padding: 10px;
box-sizing: border-box;
height: fit-content;
`

const StyledImg = styled.img
` width: 100%;`

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
};

 

  return (
    <StyledProduct>
        <Link to={`/products/${id}`}>
          <StyledImg src={image}/>
        </Link>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => addToCart(id)}>Add to Cart (${price})</button>
        <button onClick= {onDeleteProduct}>Delete Product</button>
        <button onClick= {onEditProduct}>Edit</button>
    </StyledProduct>
  );
}


