import React, { useState } from 'react';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ width: '100%', marginTop: '2em' }}>
      <BottomNavigation showLabels sx={{ bgcolor: '#e1e8ef' }}>
        <BottomNavigationAction
          className="footer-link"
          component="a"
          href="#hero"
          icon={
            <Tooltip title="Go Home" enterTouchDelay={0}>
              <HomeIcon size={30} />
            </Tooltip>
          }
          aria-label="Home"
        />

        <BottomNavigationAction
          className="footer-link"
          component="a"
          href="#about"
          icon={
            <Tooltip title="Go to About Me" enterTouchDelay={0}>
              <InfoIcon />
            </Tooltip>
          }
          aria-label="About me"
        />
        <BottomNavigationAction
          className="footer-link"
          component="a"
          href="https://www.linkedin.com/in/kep-kaeppeler/"
          target="_blank"
          rel="noopener"
          icon={
            <Tooltip title="Open my LinkedIn page" enterTouchDelay={0}>
              <LinkedInIcon />
            </Tooltip>
          }
          aria-label="LinkedIn profile"
        />
        <BottomNavigationAction
          className="footer-link"
          component="a"
          href="https://github.com/Keparoo"
          target="_blank"
          rel="noopener"
          icon={
            <Tooltip title="Open my GitHub page" enterTouchDelay={0}>
              <GitHubIcon />
            </Tooltip>
          }
          aria-label="GitHub repository"
        />
      </BottomNavigation>
      <Typography align="center" paddingTop={4} paddingBottom={4}>
        &copy; 2022 Kepweb.dev
      </Typography>
    </Box>
  );
}
