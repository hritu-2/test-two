import React from 'react'
import './footer.css'
import ContactUs from './ContactUs';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='main'>
    <div className='footer-body'>
        <table>
            <tr>
            <td>
                <h2>Help</h2>
                <ul>
                    <li>T&C</li>
                    <li>Privacy Policy.</li>
                    <li>Refunds & Return Policy</li>
                    <li>FAQs</li>
                </ul>
            </td>
            <td>
                <h2>Information</h2>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='About'>About</NavLink></li>
                    <li><NavLink to='Contact'>Contact</NavLink></li>
                    <li><NavLink to='Carts'>Cart</NavLink></li>
                    </ul>
                    </td>
            <td style={{paddingTop:'20px'}}>
                <h2>Write To Us</h2>
                <ContactUs/>
                </td>
            </tr>
            <tr>
            
            </tr>
        </table>
        <br/>
    </div>
    <hr/>
    <p style={{textAlign:'center'}}>
    ©{new Date().getFullYear()} SECOND HOME INC | All rights reserved | Terms of Service | Privacy
    </p><br/>
</div>
  )
}

export default Footer