import React, { useEffect, useState } from 'react';
import './Home.css'
import Activity from '../Activity/Activity';
import Summery from '../Summery/Summery';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [times,setTimes] =useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
    }, []);


    const handleTime = (Activity) => {
        const newTime = [...times, Activity]
        setTimes(newTime);
    }

    return (
        <div className='shop'>
            <div className='shop-component'>
               
                {
                    products.map(product =><Activity product={product} key={product.id} handleTime={handleTime}></Activity>)
                }
            </div>

            <div className='summery'>
                 <Summery></Summery>
            </div>
        </div>
    );
}

export default Home;