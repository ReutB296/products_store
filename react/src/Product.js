import './Product.css';
import {useContext} from 'react';
import {CartContext} from './CartContext';
import GetProduct from './GetProduct';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  Switch,
} from "react-router-dom";

export default function Product({
  category,
  description,
  id,
  image,
  title,
  price,
  onAddToCart,
}) {

const match = useRouteMatch();
console.log(match.url, match.path);

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
    <Router>
    <div className="product">
      <Link to={`${match.url}/${id}`}>
        <img src={image} className="product-image"/>
     </Link>
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => addToCart(id)}>Add to Cart (${price})</button>
      <button onClick= {onDeleteProduct}>Delete Product</button>
      <button onClick= {onEditProduct}>Edit</button>
      <Switch>
      <Route path={`${match.path}/:id`}>
          <GetProduct />
      </Route>
      </Switch>
    </div>
     </Router> 
    
  );
}


