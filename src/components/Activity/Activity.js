import React from 'react';
import './Activity.css'
const Activity = (props) => {
    // console.log(props.product)
    const {handleTime}= props
    const{name,picture, time, description ,age}=props.product;
    return (
        <div className='activity'>
           
        <img src={picture} alt="img" />
        <h3>Name:{name}</h3>
        <p>{description}</p>
        <h5>Age:{age}</h5>
        <h5>Time required:{time}</h5>
        <div className='btn-btn'>
            <button onClick ={() => handleTime(props.activity)}className='button'> Add to click</button>
        </div>
        </div>
    );
};

export default Activity;