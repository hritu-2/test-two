import React from 'react';
import './Styles CSS/fruits.css';
import Footer from './Footer';

const Fruits=({product,addToCart})=>{
    return(
   <div><div className='homeofruit'><p className='fruititle'>FRUITS</p></div>
   <div className='flex'>{  product.map((productItem,productIndex)=>{
      return(
            <div key={productIndex} style={{width:'25%'}}>
        
                  <div className='product-item prod-bord'>  <img src={productItem.url} style={{width:"100%"}}  />
                  <p style={{fontWeight:'500',marginBottom:'10px'}}>{productItem.name} {productItem.amt}</p>
                 <p style={{marginBottom:'10px'}}> Rs:{productItem.price}/-</p>
                 <button className='add' onClick={()=>addToCart(productItem)}>Add To Cart</button>
                 </div>

                
                </div>

        )
    })
   }
    </div>
    <br/><br/><br/>
    <Footer/>
</div>
   
    );
}

export default Fruits;