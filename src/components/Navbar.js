import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import CodeIcon from '@mui/icons-material/Code';
import { Box, Menu, MenuItem, Stack } from '@mui/material';

import resume from '../static/kep-kaeppeler-resume.pdf';

const Navbar = () => {
  const [ anchorElNav, setAnchorElNav ] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CodeIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'asap',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            Kep Kaeppeler
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit" href="#about">
                  About
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit" href="#projects">
                  Projects
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit" href="#contact">
                  Contact
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit" href={resume} target="_blank">
                  Resume
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <Button color="inherit" href="#about">
              About
            </Button>
            <Button color="inherit" href="#projects">
              Projects
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
            <Button color="inherit" href={resume} target="_blank">
              Resume
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
