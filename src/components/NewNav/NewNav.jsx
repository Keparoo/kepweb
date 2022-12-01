import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';

import { Menu, MenuItem } from '@mui/material';

import resume from '../../static/kep-kaeppeler-resume.11.1.pdf';

import styles from './NewNav.module.css';

const NewNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
    <header className={styles.primaryHeader}>
      <div className={styles.navContainer}>
        <a className={styles.navbarName} href="#hero">
          <span className={styles.codeIcon}>
            <CodeIcon />
          </span>
          Kep Kaeppeler
        </a>

        {/* Nav dropdown for sizes xs-sm */}
        <div className={styles.dropdown}>
          <IconButton
            size="large"
            aria-label="website navigation"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {navLinks.map((link) => (
              <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                <Button
                  color="inherit"
                  variant={link.variant}
                  href={link.href}
                  target={link.target ? '_blank' : ''}
                >
                  {link.name}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Nav bar for sizes md-xl */}
        <nav>
          <ul className={styles.primaryNavigation}>
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
    </header>
  );
};
export default NewNav;
