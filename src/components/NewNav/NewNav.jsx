import React, { useState } from 'react';

import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';

import resume from '../../static/kep-kaeppeler-resume.11.1.pdf';

import styles from './NewNav.module.css';

const NewNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    {
      name: 'Home',
      href: '#hero',
      target: false,
      variant: 'text',
      active: 'active',
    },
    {
      name: 'About',
      href: '#about',
      target: false,
      variant: 'text',
      active: '',
    },
    {
      name: 'Projects',
      href: '#projects',
      target: false,
      variant: 'text',
      active: '',
    },
    {
      name: 'Resume',
      href: resume,
      target: true,
      variant: 'text',
      active: '',
    },
    {
      name: 'Contact',
      href: '#contact',
      target: false,
      variant: 'outlined',
      active: '',
    },
  ];

  return (
    <div className={styles.primaryHeader}>
      <a href="#hero" className={styles.navbarName}>
        <span className={styles.codeIcon}>
          <CodeIcon />
        </span>
        Kep Kaeppeler
      </a>

      <button
        className={styles.mobileNavToggle}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible={menuOpen}
          className={styles.primaryNavigation}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Button
                variant={link.variant}
                color="inherit"
                href={link.href}
                target={link.target ? '_blank' : ''}
                id={link.active}
                className={`${styles.navbarLink} ${link.active}`}
              >
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default NewNav;
