import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';

import { Box, Menu, MenuItem, Stack } from '@mui/material';

import resume from '../static/kep-kaeppeler-resume.9.1.pdf';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    {
      name: 'About',
      href: '#about',
      target: false,
    },
    {
      name: 'Projects',
      href: '#projects',
      target: false,
    },
    {
      name: 'Contact',
      href: '#contact',
      target: false,
    },
    {
      name: 'Resume',
      href: resume,
      target: true,
    },
  ];

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="code icon"
          >
            <CodeIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
          </IconButton>

          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'asap',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Kep Kaeppeler
          </Typography>

          {/* Nav dropdown for sizes xs-sm */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="headings of website"
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
                    href={link.href}
                    target={link.target ? '_blank' : ''}
                  >
                    {link.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Nav bar for sizes md-xl */}
          <nav>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  color="inherit"
                  href={link.href}
                  target={link.target ? '_blank' : ''}
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
