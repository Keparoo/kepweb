import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';

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
      >
        <BottomNavigationAction icon={<InfoIcon />} />
        <BottomNavigationAction icon={<LinkedInIcon />} />
        <BottomNavigationAction icon={<GitHubIcon />} />
      </BottomNavigation>
    </Box>
  );
}
