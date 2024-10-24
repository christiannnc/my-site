import React from 'react';
import '../../css/contact.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Let's talk!</h2>

      <div className="form-container">
        <a className="contact-link" href="mailto:christian@christianmcox.com">
          christian@christianmcox.com
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
