import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

export default function Footer() {
  const [ value, setValue ] = React.useState(0);

  return (
    <Box sx={{ width: '100%', marginTop: '30px' }}>
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
          href="#about"
          icon={<InfoIcon />}
          aria-label="About me"
        />
        <BottomNavigationAction
          component="a"
          href="https://www.linkedin.com/in/kep-kaeppeler/"
          target="_blank"
          rel="noopener"
          icon={<LinkedInIcon />}
          aria-label="LinkedIn profile"
        />
        <BottomNavigationAction
          component="a"
          href="https://github.com/Keparoo"
          target="_blank"
          rel="noopener"
          icon={<GitHubIcon />}
          aria-label="GitHub repository"
        />
      </BottomNavigation>
      <Typography align="center" paddingBottom={2}>
        &copy; 2022 Kepweb.dev
      </Typography>
    </Box>
  );
}
