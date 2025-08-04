import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-box animated">
        <h2 className="contact-title">Let's Connect</h2>
        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Your Email</label>
          </div>
          <div className="input-group">
            <textarea required rows="4"></textarea>
            <label>Your Message</label>
          </div>
          <button className="send-btn" type="submit">Send</button>
        </form>
      </div>
      
    </section>
  );
};

export default Contact;

