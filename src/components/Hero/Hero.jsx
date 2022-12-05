import React from 'react';

import computerImage from '../../static/pixeltrue-web-development-1.svg';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero} ${styles.columns}`}>
      <div>
        <h1 className="primary-heading">Kep</h1>
        <p className="primary-subheading">
          <br />
          I'm a full-stack web developer with a passion for challenges.
        </p>
        <a className="button btn-large" href="#contact">
          Contact Me
        </a>
      </div>

      <div>
        <img className="computer-image" src={computerImage} />
      </div>
    </section>
  );
};

export default Hero;
