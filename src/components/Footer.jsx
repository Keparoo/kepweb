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
  const [ value, setValue ] = useState(0);

  return (
    <Box sx={{ width: '100%', marginTop: '1.875em' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: '#e0e0e0' }}
      >
        <BottomNavigationAction
          component="a"
          href="/"
          icon={
            <Tooltip title="Go Home" enterTouchDelay={0}>
              <HomeIcon />
            </Tooltip>
          }
          aria-label="Home"
        />

        <BottomNavigationAction
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
      <Typography align="center" paddingBottom={2}>
        &copy; 2022 Kepweb.dev
      </Typography>
    </Box>
  );
}
