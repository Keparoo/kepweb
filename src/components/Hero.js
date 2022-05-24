import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <Box sx={{ marginTop: '72px', marginBottom: '144px' }}>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <Typography
            variant="h1"
            sx={{ fontFamily: 'Gruppo', fontSize: '144px' }}
          >
            Kep
          </Typography>
        </Grid>

        <Grid item md={8} sm={12}>
          <Typography
            variant="p"
            sx={{ fontFamily: 'Gruppo', fontSize: '36px' }}
          >
            <br />
            I'm a full stack web developer living in Cape Cod, Massachusetts.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
