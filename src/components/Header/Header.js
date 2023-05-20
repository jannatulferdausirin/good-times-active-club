import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           
                 <h2><FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon></h2>
                <h3>Good Times Active Club</h3>
            
        </div>
    );
};

export default Header;