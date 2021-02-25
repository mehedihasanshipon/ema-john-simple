import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] = useState(first10);
    const [carts,setCart] = useState([]);
    // console.log(product)
    const handleAddClick = (product)=> {
        const newCart = [...carts,product];
        setCart(newCart)
    }
    return (
        <div className = 'shop-container'>
            <div className = 'product-container'>
                {
                    products.map(product => <Product product = {product} handleAddClick = {handleAddClick} /> )
                }
            </div>
            <div className = 'cart-container'>
               <Cart cart = {carts} />
            </div>
        </div>
    );
};

export default Shop;