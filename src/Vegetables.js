import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles CSS/fruits.css';
import Footer from './Footer';

const Vegetables = ({vege,addToCart}) => {
  return (
    <div>
    <div className='homeofveg'></div>
    <div className='flex'>{vege.map((vegeItem,vegeIndex)=>{
        return(
            <div key={vegeIndex} style={{width:'25%'}}>
                <div className='product-item prod-bord'><img src={vegeItem.url} style={{width:'100%',height:'220px'}} />
                <p style={{fontWeight:'500',marginBottom:'10px'}}>{vegeItem.name} {vegeItem.amt}</p>
                 <p style={{marginBottom:'10px'}}> Rs:{vegeItem.price}/-</p>
                 <button className='add' onClick={()=>addToCart(vegeItem)}>Add To Cart</button>
                </div>
            </div>
        )
    })}

    </div><br/><br/><br/>
    <Footer/>
    </div>
  );
}

export default Vegetables