import React from 'react';
import './Activity.css'
const Activity = (props) => {
    // console.log(props.product)
    const{name,picture}=props.product;
    return (
        <div className='activity'>
            <h2>this is activity cart</h2>
        <img src={picture} alt="img" />
        <h2>Name:{name}</h2>
        </div>
    );
};

export default Activity;