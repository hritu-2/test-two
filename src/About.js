import React from 'react';
import ReactDOM from 'react';
import Footer from './Footer';



function About(){
    const aboutcss={
        fontFamily:'Roboto',
        margin:'30px 300px',
        fontSize:'18px'
    }
    return(
        <>
        <div style={aboutcss}>
            <h1 style={{fontSize:'40px'}}>About Us</h1><br/><br/>
            <p>Hello! Welcome to _________ 😃 </p><br/>
            <p>No more waiting in line at the bill counters or travelling to several
                 shops to get what you want. Freshclub brings you the best quality fruits,
                  vegetables, packaged goods, pulses, grains, meats & many more to your 
                  doorstep at no additional cost. </p><br/>
            <p>
                For a better environment and future Freshclub uses electric trucks for
                 delivery and biodegradable packaging for our products. 
                 1% of what you purchase will be donated to the nearest orphanage of
                  your city or town.
            </p><br/>
            <p>
                Freshclub specializes in delivering best quality fresh produce. From sourcing 
                to grading to packing and delivering, we take all necessary steps to ensure the
                best quality produce delivered hygienically and sanitised.
            </p><br/>
              <p>Customer satisfaction is the main priority and Freshclub aims to deliver it. Contact
                us for any product requirements or comments or feedback. We are here to serve you.</p><br/>
            <p>Happy Shopping!!</p>
            <br/><br/>
            
        </div>
        <Footer/>
        </>
    )
}

        
        
  

export default About;