import React, { useEffect, useState } from 'react';
import './Shop.css'
import Activity from '../Activity/Activity';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
    }, []);
    return (
        <div className='shop'>
            <div className='shop-component'>
                <h2>Component:{products.length}</h2>
                {
                    products.map(product =><Activity product={product} key={product.id}></Activity>)
                }
            </div>






            <div className='about'>
                <h2>activity</h2>
              
            </div>
        </div>
    );
};

export default Shop;