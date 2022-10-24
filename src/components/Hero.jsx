import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// const myText = new SplitType('#animation-text');
// console.log('myText', myText);
// gsap.to('.char', {
//   y: 0,
//   stagger: 0.05,
//   delay: 0.2,
//   duration: 0.1,
// });

const Hero = () => {
  return (
    <Box
      id="hero"
      className="sectionHeading"
      sx={{ paddingTop: '12.75em', paddingBottom: '5.25em' }}
    >
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <div
            className="line"
            style={{ diplay: 'block', textAlign: 'start', width: '100%' }}
          >
            <div className="word" style={{ display: 'inlineBlock' }}>
              <div className="char" style={{ display: 'inlineBlock' }}>
                K
              </div>
              <div className="char" style={{ display: 'inlineBlock' }}>
                E
              </div>
              <div className="char" style={{ display: 'inlineBlock' }}>
                P
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={8} sm={12}>
          <Typography variant="p" sx={{ fontSize: '2.25rem' }}>
            <br />
            I'm a full stack web developer from Massachusetts.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
