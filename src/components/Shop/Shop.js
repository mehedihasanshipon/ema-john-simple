import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] = useState(first10);
    const [carts,setCart] = useState([]);

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key ===existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[])
    // console.log(carts)
    const handleAddClick = (product)=> {
        const toBeAddedKey = product.key;
        const sameProduct = carts.find(pd => pd.key === toBeAddedKey);
        let count =1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = carts.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others,sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...carts,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count)
    }
    return (
        <div className = 'twin-container'>
            <div className = 'product-container'>
                {
                    products.map(product => <Product showAddToCart ={true} product = {product} key = {product.key} handleAddClick = {handleAddClick} /> )
                }
            </div>
            <div className = 'cart-container'>
               <Cart cart = {carts} >
                    <Link to="/review">
                        <button className = "main-button">Review Now</button>
                    </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;