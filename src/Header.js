import React from 'react';
import './Styles CSS/App.css';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact';

function Header(props){
  
    return(
    <div class="bl">
      <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='About'>About</NavLink></li>
            <li><NavLink to='Contact' >Contact</NavLink></li>
            <li><NavLink to='Carts'><FontAwesomeIcon icon={faCartShopping} /><sup>{props.count}</sup></NavLink></li>
        </ul>        
      </nav>  
      
      </div>  
    )
}

export default Header;