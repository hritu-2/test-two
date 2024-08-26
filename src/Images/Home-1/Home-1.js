import React from 'react';
import './home.css'


const Home1=()=>{
    return(
     <div className='home'>  
    <div className=''>
    <h1>Anything you Want,<br/> Delivered Directly to<br/> your Door</h1>
    <br/>
    <form>
     <div className='add'><input className='enter' type='text' placeholder='Enter address to find nearby shops'/><button className='shopnow'>Shop now</button></div>
    </form>
    
</div> 
<div className='cate'>
        <h1>Shop by Category</h1>
        <ul>
        <li className='box1'>Grocery</li>
        <li className='box2'>Electronics</li>
       <li className='box3'>Fashion</li>
       <li className='box4'>Books and Entertainment</li></ul>
    </div>
</div>
    
        
        
    )
}

export default Home1;