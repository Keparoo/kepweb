import React, { useState } from 'react';

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
      variant: 'btn-link',
      active: 'active',
    },
    {
      name: 'About',
      href: '#about',
      target: false,
      variant: 'btn-link',
      active: '',
    },
    {
      name: 'Projects',
      href: '#projects',
      target: false,
      variant: 'btn-link',
      active: '',
    },
    {
      name: 'Resume',
      href: resume,
      target: true,
      variant: 'btn-link',
      active: '',
    },
    {
      name: 'Contact',
      href: '#contact',
      target: false,
      variant: 'btn-outline',
      active: '',
    },
  ];

  return (
    <section className={styles.primaryHeader}>
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
        <span className="visually-hidden">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          role="list"
          aria-label="Primary"
          data-visible={menuOpen}
          className={styles.primaryNavigation}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.target ? '_blank' : ''}
                id={link.active}
                className={`button btn-link ${styles.navbarLink} ${link.active} ${link.variant}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default NewNav;
