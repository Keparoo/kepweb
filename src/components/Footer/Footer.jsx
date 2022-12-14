import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <nav className="container">
        <ul role="list" aria-label="Footer" className={styles.footerNavigation}>
          <li>
            <a href="#hero" aria-label="Home">
              <Tooltip title="Go Home" enterTouchDelay={0}>
                <HomeIcon size={30} className={styles.footerIcon} />
              </Tooltip>
            </a>
          </li>

          <li>
            <a href="#about" aria-label="About me">
              <Tooltip title="Go to About Me" enterTouchDelay={0}>
                <InfoIcon size={30} className={styles.footerIcon} />
              </Tooltip>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/kep-kaeppeler/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn profile"
            >
              <Tooltip title="Open my LinkedIn page" enterTouchDelay={0}>
                <LinkedInIcon size={30} className={styles.footerIcon} />
              </Tooltip>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Keparoo"
              target="_blank"
              rel="noopener"
              aria-label="GitHub repository"
            >
              <Tooltip title="Open my GitHub page" enterTouchDelay={0}>
                <GitHubIcon size={30} className={styles.footerIcon} />
              </Tooltip>
            </a>
          </li>
        </ul>
      </nav>

      <p className={styles.copyright}>&copy; 2022 Kepweb.dev</p>
    </div>
  );
}
