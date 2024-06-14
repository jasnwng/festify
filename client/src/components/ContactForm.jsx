import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
   
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
          }, 3000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div id='beta-form-container'>
      <form onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Company</label>
        <input type="text" name="from_company" />
        <button type="submit" id="beta-send" disabled={isSubmitting}/>
        {/* <input type="submit" id="beta-send" value="Send" disabled={isSubmitting} /> */}
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;