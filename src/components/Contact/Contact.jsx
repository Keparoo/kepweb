import React from 'react';

import ContactForm from './ContactForm';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={`${styles.contact} padding-block-900`}>
      <div className={styles.columns}>
        <h2 className="secondary-heading">Contact me</h2>

        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
