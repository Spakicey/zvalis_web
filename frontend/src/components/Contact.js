// Contact.js
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { setHeroSize } from '../services/heroSizeService';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  useEffect(() => {
    setHeroSize();
  }, []);

  const checkEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nameVal = document.getElementById('nameVal').value;
    //console.log(nameVal);
    const emailVal = document.getElementById('emailVal').value;
    //console.log(emailVal);
    const msgVal = document.getElementById('msgVal').value;
    //console.log(msgVal);

    if (nameVal === "" || emailVal === "" || msgVal === "") {
      setStateMessage('Please fill out all fields');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000) // Hide after 5 secs
    }
    else {
      sendEmail(e);
    }
  };

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 secs
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 secs
        }
      );

      // Clear form after email
      e.target.reset();
  };

  return (
    <div className='hero'>
      <section className='container'>
        <div className='contact'>
          <h1 className='text'>"CONTACT ME"</h1>
          <h3 className='text'>If you would like to contact me about any
                freelance projects or employment opportunities,
                please fill out the form below. Thank you!</h3>
          <form className='form' onSubmit={checkEmail}>
            <label className='text'>Name</label>
            <input className='name-area' type="text" name="from_name" id='nameVal'/>
            <label className='text'>Email</label>
            <input className='email-area' type="email" name="user_email" id='emailVal'/>
            <label className='text'>Message</label>
            <textarea className='message-area' name="message" id='msgVal'/>
            <input className='submit-button' type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p className='text'>{stateMessage}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
