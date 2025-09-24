import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xrbygjdv");
  if (state.succeeded) {
      return (
        <section id="contact" className="contact-container">
            <h2>Thanks for your message!</h2>
            <p>I'll get back to you as soon as possible.</p>
        </section>
      );
  }
  return (
    <section id="contact" className="contact-container">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Please fill out the form below to get in touch.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows="5"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="submit-button">
                Submit
            </button>
        </form>
    </section>
  );
}

export default Contact;
