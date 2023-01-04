import React, { useState } from 'react';

import CodeIcon from '@mui/icons-material/Code';

import resume from '../../static/kep-kaeppeler-resume.11.1.pdf';

import styles from './Navbar.module.css';

const Navbar = ({ visible }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navClick = (e) => {
    setMenuOpen(false);
  };

  const navLinks = [
    {
      name: 'Home',
      href: '#hero',
      target: false,
      variant: 'btn-link',
      active: visible.hero,
    },
    {
      name: 'Projects',
      href: '#projects',
      target: false,
      variant: 'btn-link',
      active: visible.projects,
    },
    {
      name: 'About',
      href: '#about',
      target: false,
      variant: 'btn-link',
      active: visible.about,
    },

    {
      name: 'Resume',
      href: resume,
      target: true,
      variant: 'btn-link',
      active: false,
    },
    {
      name: 'Contact',
      href: '#contact',
      target: false,
      variant: 'btn-inverted',
      active: visible.contact,
    },
  ];

  return (
    <section className={styles.primaryHeader}>
      <div className="container">
        <div className={styles.navWrapper} data-overlay={menuOpen}>
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
                    data-active={link.active}
                    className={`button ${link.variant}`}
                    onClick={navClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
