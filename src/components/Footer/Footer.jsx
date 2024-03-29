import React from 'react';
import { Tooltip } from '../Tooltip/Tooltip';

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
// import { Tooltip as MUITooltip } from '@mui/material';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <nav className="container">
        <ul role="list" aria-label="Footer" className={styles.footerNavigation}>
          <li>
            <a href="#hero" aria-label="Home">
              <Tooltip title="Go Home">
                <HomeIcon size={30} className={styles.footerIcon} />
              </Tooltip>
            </a>
          </li>

          <li>
            <a href="#about" aria-label="About me">
              <Tooltip title="Go to About Me">
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
              <Tooltip title="Open my LinkedIn page">
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
              <Tooltip title="Open my GitHub page">
                <GitHubIcon size={30} className={styles.footerIcon} />
              </Tooltip>
            </a>
          </li>
        </ul>
      </nav>

      <p className={styles.copyright}>&copy; 2023 Kepweb.dev</p>
    </div>
  );
}
