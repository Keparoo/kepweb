import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import CodeIcon from '@mui/icons-material/Code';
import { Stack } from '@mui/material';

import resume from '../static/kep-kaeppeler-resume.pdf';

const Navbar = () => {
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
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
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
          <Stack direction="row" spacing={2}>
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
