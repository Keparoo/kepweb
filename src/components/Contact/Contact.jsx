import React from 'react';

import ContactForm from './ContactForm';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={`${styles.contact} ${styles.columns}`}>
      <div>
        <h2 className="secondary-heading">Contact me</h2>
      </div>

      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
