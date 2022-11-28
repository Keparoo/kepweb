import React from 'react';

import computerImage from '../../static/pixeltrue-web-development-1.svg';

import { Button } from '@mui/material';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero} ${styles.columns}`}>
      <div>
        <h1 className={styles.heroHeader}>Kep</h1>
        <p className={styles.heroSubhead}>
          <br />
          I'm a full-stack web developer with a passion for challenges.
        </p>
        <Button
          variant="contained"
          href="#contact"
          size="large"
          fullWidth={false}
          sx={{ marginTop: '3em' }}
        >
          Contact Me
        </Button>
      </div>

      <div>
        <img className="computer-image" src={computerImage} />
      </div>
    </section>
  );
};

export default Hero;
