import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
//   console.log(props);
  const { name, img,seller ,price,stock} = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className = 'product-name'>{name}</h4><br/>
        <p>by: {seller}</p><br/>
        <p>${price}</p><br/>
        <p>only {stock} left in stock - order soon</p><br/>
        <button onClick = {()=> props.handleAddClick(props.product)} className = 'main-button'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
