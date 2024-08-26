import React from 'react';
import {useState} from 'react'
import './Styles CSS/Contact.css';
import axios from 'axios'
import emailjs from '@emailjs/browser'


const Contact=()=>{
   let [user,setUser] =useState({
    name: '',
    age:'',
    email:'',
    pass: ''
   })
       
const UserValue=(e)=>{
    setUser({
        ...user,[e.target.name]:e.target.value
    } )}  
   const RegUser=async(e)=>{
    e.preventDefault()
    let resp=await axios.post('')
    alert(resp.data.msg)
   }
   return(
    <div className='for'>
        <form  action="" onSubmit={RegUser}>
            <div ><input className='ugp' onChange={UserValue} value={user.name} name='name' type='text' placeholder='Enter your name'/></div><br/>
            <div><input className='ugp' onChange={UserValue} value={user.age} name='age' type='text' placeholder='Enter your age'/></div><br/>
            <div><input className='ugp' onChange={UserValue} value={user.email} name='email' type='text' placeholder='Enter your email'/></div><br/>
            <div ><input className='ugp' onChange={UserValue} value={user.pass} name='pass' type='text' placeholder='Enter your password'/></div><br/>
            <div ><input className='butto' type='submit' value='submit' /></div>
        </form>
       
    </div>
   ) 
}

export default Contact;