import React from 'react';
import ProjectCard from './ProjectCard';
import tapntableScreenshot from '../static/tapntableScreenshot.jpg';
import { Box, Grid, Typography } from '@mui/material';

const ProjectList = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h2">Projects</Typography>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item md={6}>
          <ProjectCard
            title="Tapntable"
            description={
              <span>
                A web-based restaurant point-of-sale system (POS) creating an
                application for servers, bartenders, and managers to run
                restaurant operations including orders, timeclock, and
                inventory.<br />
                <strong>Backend:</strong> PostgreSQL database with a RESTful API
                using Node.js, Express, and a Jest test suite<br />
                <strong>Frontend:</strong> Single-page React-Redux user
                interface managing orders, checks, payments, end-of-day
                reconciliation, sales reports, timeclock, and database
                management
              </span>
            }
            image={tapntableScreenshot}
            demo="https://tapntable.herokuapp.com/"
            github="https://github.com/Keparoo/tapntable-backend"
          />
        </Grid>

        <Grid item md={6}>
          <ProjectCard
            title="TuttiTracks"
            description={
              <span>
                A web app leveraging the Spotify API to search for and save song
                tracks and audio information including tempo, time signature,
                and key. A user can create and edit playlists that may be
                uploaded to the user’s Spotify account.<br />
                <strong>Backend</strong>: Python with a PostgreSQL database, a
                RESTful API, Oauth authorization, and unittest test suite.<br />
                <strong>Frontend</strong>: Python, Flask, and Jinja2 templates.
              </span>
            }
            image={tapntableScreenshot}
            demo="https://spotiflavor.herokuapp.com/"
            github="https://github.com/Keparoo/Tuttitracks"
          />
        </Grid>

        <Grid item md={6}>
          <ProjectCard
            title="Casting Agency"
            description={
              <span>
                A web API to manage movies and actor assignments for a casting
                agency<br />
                <strong>Backend</strong>: PostgreSQL database with a RESTful API
                using Python and Flask, role-based access control authorization,
                test suite, and deployed to Heroku.
              </span>
            }
            image={tapntableScreenshot}
            demo="https://kep-casting-agency.herokuapp.com/"
            github="https://github.com/Keparoo/casting-agency"
          />
        </Grid>

        <Grid item md={6}>
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={tapntableScreenshot}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectList;
