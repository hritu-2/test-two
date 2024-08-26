import React from 'react'
import {useEffect,useState} from 'react';
import './Styles CSS/App.css';
import './Styles CSS/fruits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'


function CartList({cart}){
    const [CART,setCART]=useState([])
    useEffect(()=>{
        setCART(cart)
    },[cart])
    return (
        <div >
            {
                CART?.map((cartItem,cartindex)=>{
                    return(
                        <div className='cart-prod'>
                           <img src={cartItem.url} style={{width:'100px',marginRight:'850px'}}/>
                        <div style={{marginLeft:'300px',textAlign:'left',paddingBottom:'5px'}}> <span style={{marginBottom:'40px'}}>{cartItem.name} </span>
                           <span>Rs.{cartItem.price*cartItem.quantity}  </span>
                        
                         <div style={{border:'1px solid black',width:'66px'}} >
                            <button className='plusminus' 
                         onClick={()=>{
                            const _CART=CART.map((item,index)=>{
                                return cartindex ===index ? {...item, quantity: item.quantity+1}: item
                            })
                            setCART(_CART)
                         }}
                         ><FontAwesomeIcon icon={faPlus} /></button>
                        <span> {cartItem.quantity} </span> 
                        <button className='plusminus'
                        onClick={()=>{
                            const _CART=CART.map((item,index)=>{
                                return cartindex ===index ? {...item, quantity: item.quantity>0 ? item.quantity-1:0}: item
                            })
                            setCART(_CART)
                         }}
                        ><FontAwesomeIcon icon={faMinus} /></button></div></div>
                        </div>
                        
                    )
                })
            }
        <div style={{textAlign:'center'}}>
            <p style={{fontSize:'25px'}}>Subtotal Rs.<span></span>
                {
                    CART.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0)
                }
            </p>
            <br/>
            <button className='check'>Check out</button>
        </div>
        <div style={{backgroundColor:'#2E2D33',
                    color:'white',
                    marginTop:'300px'}}>
        <hr/>
    <p style={{textAlign:'center'}}>
    ©{new Date().getFullYear()} SECOND HOME INC | All rights reserved | Terms of Service | Privacy
    </p><br/>
        </div>
        </div>
    )
}

export default CartList