import React, { useState } from 'react';

import CodeIcon from '@mui/icons-material/Code';

import resume from '../../static/kep-kaeppeler-resume.11.1.pdf';
import Menu from '../../static/menu.svg';
import Close from '../../static/close.svg';

import styles from './NewNewNav.module.css';

const NewNewNav = () => {
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
    <section className={styles.primaryHeader} data-overlay={menuOpen}>
      <div className={styles.navWrapper}>
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
          <img
            className={styles.iconHamburger}
            src={Menu}
            alt=""
            aria-hidden="true"
          />
          <img
            className={styles.iconClose}
            src={Close}
            alt=""
            aria-hidden="true"
          />
          <span className="visually-hidden">Menu</span>
        </button>

        <nav
          className={styles.primaryNavigation}
          id="primary-navigation"
          data-visible={menuOpen}
        >
          <ul role="list" aria-label="Primary" className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.target ? '_blank' : ''}
                  className={`button ${link.variant}} ${link.active}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`button ${styles.displayMdInlineFlex} ${styles.displaySmNone}`}
        >
          Contact
        </button>
      </div>
    </section>
  );
};
export default NewNewNav;
