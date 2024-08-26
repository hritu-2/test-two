import React from 'react'
import './Styles CSS/fruits.css';
import Footer from './Footer';

const Dairy = ({dry,addToCart}) => {
  return (
    <div>
    <div className='homeofcow'></div>
   <div className='flex'>{  dry.map((dryItem,dryIndex)=>{
      return(
            <div key={dryIndex} style={{width:'25%'}}>
        
                  <div className='product-item prod-bord'>  <img src={dryItem.url} style={{width:'100%',height:'220px'}} />
                  <p style={{fontWeight:'500',marginBottom:'10px'}}>{dryItem.name} {dryItem.amt}</p>
                 <p style={{marginBottom:'10px'}}> Rs:{dryItem.price}/-</p>
                 <button className='add' onClick={()=>addToCart(dryItem)}>Add To Cart</button>
                 </div>

                
                </div>

        )
    })
   }
    </div>
   <br/><br/><br/>
    <Footer/>
    </div>
  )
}

export default Dairy