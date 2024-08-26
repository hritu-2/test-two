import React from 'react';
import './Styles CSS/Homeveg.css';
import Fruits from './Fruits.js';
import Vegetables from './Vegetables.js';
import Dairy from './Dairy';
import Footer from './Footer.js';
import {Outlet,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckFast,faCarrot,faAward,faRotateLeft } from '@fortawesome/free-solid-svg-icons'


function over(obj){
    obj.target.style.backgroundColor='#256A28'
}
function out(e){
    e.target.style.backgroundColor='#318D35'
}
 
function overwhite(obj){
    obj.target.style.backgroundColor='#72706D'
}
function outwhite(e){
    e.target.style.backgroundColor='white'
}

const Home=()=>{
    const CuF={
        padding:"50px 0px 0px 30px",
        fontSize:"25px",
        color:"#027148"
       
        
    };
    const BroF={
       /* padding:"16px 30px 0px 10px",*/
       padding:"50px 0px 0px 30px",
        fontSize:"25px",
        color:"#027148"
    }
    const fact={
        padding:"20px 30px"
    }
    return(
    <>
    
     <div className='home'> <div className='des fol'><h1 className='hea1'>Everything 100% Organic</h1>
     <button className="butto" onMouseOver={over} onMouseOut={out}>Learn more</button>
     </div> 
     
     <div className='box1'><h4 style={CuF} >As Cool as a Cucumber</h4>
     <p style={fact}>A slice of cucumber can kill bacteria<br/> and freshen the breath!</p>
    <div style={{paddingLeft:"10px"}}><button className="whbut" onMouseOver={overwhite} onMouseOut={outwhite} >Shop now</button></div><div className='cucu'/>
     <div className='box2'>
     <h4 style={CuF} >Broccoli: an asset to eating well</h4>
     <p style={fact}>One cup of broccoli has more <br/> Vitamin C than an orange. The<br/> Vitamin A in the vegetable<br/> keep eyes healthy.</p>
     <div style={{paddingLeft:"10px"}}><button className="whbut" onMouseOver={overwhite} onMouseOut={outwhite} >Shop now</button></div>
        <div className='broc'/></div>
     <div className='box3' >
     <h4 style={CuF} >Our Cabbage a.k.a Patta Gobi</h4>
     <p style={fact}>It supports your immune<br/> system, digestive health, and<br/> bone health. </p>
     <div style={{paddingLeft:"10px"}}><button className="whbut" onMouseOver={overwhite} onMouseOut={outwhite} >Shop now</button></div>
        
        <div className='caba'/></div>
     
     </div>
     <div className='wh'>
        <table style={{width:'80%'}}>
            <tr>
                <td><FontAwesomeIcon icon={faTruckFast} className='fa' /><p>Fast Delivery to<br/> your Doorstep</p></td>
                <td><FontAwesomeIcon icon={faCarrot} className='fa' /><p>Freshly Picked<br/> from Farm</p></td>
                <td><FontAwesomeIcon icon={faAward} className='fa'/><p>A Quality<br/> you can trust</p></td>
                <td><FontAwesomeIcon icon={faRotateLeft} className='fa' /><p>Return Policy</p></td>
            </tr>
        </table>
     </div>
     <div className='story' style={{textAlign:"center"}}><div className='hapor'/><h1 style={{paddingTop:"330px"}}>For every product You buy,<br/> You are Making a Big Difference!</h1>
     <p style={{padding:"0 80px 0", fontWeight:"600"}}>1% of what you purchase will be donated to the nearest orphanage of your city or town.<br/> And when you indirectly donate to a cause you care about, you’ll know that your decision to donate is making a tangible impact<br/> on the lives of those we help. </p>
     
     </div>
    
     <div className='category'><h1 className='catetitle'>Categories</h1>
    <Link to='/Fruits'><div className='pink'><br/><div className='pomo'/></div></Link>
    <Link to=""><div className='blue'><br/> <div className='Sea'/></div></Link>
    <Link to="/Dairy"><div className='yellow'><br/><div className='dairy'/></div></Link>
    <Link to="/Vegetables"><div className='lgreen'><br/><div className='veggie'/> </div></Link>
    <Outlet/>
     </div>
     <Footer/>
     </div>
      
     </>
    )
}

export default Home;