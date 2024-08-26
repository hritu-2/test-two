import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Styles CSS/Contact.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ayuuw8a', 'template_vt9817k', form.current, 'blmqJ8pDpMn5XWdAC')
      .then((result) => {
          console.log(result.text);
          alert("message sent!!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div >
    <form ref={form} onSubmit={sendEmail} className='writeus'>
      {/*<label>Name</label>*/}
      <input type="text" name="user_name" placeholder='Write your Name' required /><br/>
      {/*<label>Email</label>*/}
      <input type="email" name="user_email" placeholder='Write your Email' required/><br/>
      {/*<label>Message</label>*/}
      <textarea name="message" placeholder='Feedback'/><br/>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;