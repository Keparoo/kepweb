import React from 'react';

import ProjectCard from './ProjectCard';

import tapntable from '../static/tapntable-700x440.jpg';
import tuttitracks from '../static/tuttitracks-700x440.jpg';
import castingAgency from '../static/castingAgency-700x440.jpg';

import { Box, Grid, Typography } from '@mui/material';

const ProjectList = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '4.5em' }}>
      <Typography variant="h2" id="projects" sx={{ paddingTop: '1.5em' }}>
        Projects
      </Typography>
      <Grid container direction="row" justifyContent="space-around" spacing={4}>
        <Grid item md={6} lg={4}>
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
                management.<br />
                <br />
                <strong>Note:</strong>The deployed site will allow a user to log
                in with a demo-pin: 12345 to try out the app.
              </span>
            }
            image={tapntable}
            demo="https://tapntable.surge.sh/"
            github="https://github.com/Keparoo/tapntable-backend"
          />
        </Grid>

        <Grid item md={6} lg={4}>
          <ProjectCard
            title="TuttiTracks"
            description={
              <span>
                A web app leveraging the Spotify API to search for and save song
                tracks and audio information including tempo, time signature,
                and key. A user can create and edit playlists that may be
                uploaded to the user's Spotify account.<br />
                <strong>Backend</strong>: Python with a PostgreSQL database, a
                RESTful API, Oauth authorization, and unittest test suite.<br />
                <strong>Frontend</strong>: Python, Flask, and Jinja2 templates.{' '}
                <br />
                <br />
                <strong>Note:</strong> In order to use the app, if the user is
                not currently logged into their Spotify account they will be
                directed to login or signup using OAuth. A user may then create
                a Tuttitracks account to create and manage playlists.
              </span>
            }
            image={tuttitracks}
            demo="https://spotiflavor.herokuapp.com/"
            github="https://github.com/Keparoo/Tuttitracks"
          />
        </Grid>

        <Grid item md={6} lg={4}>
          <ProjectCard
            title="Casting Agency"
            description={
              <span>
                A web API to manage movies and actor assignments for a casting
                agency<br />
                <strong>Backend</strong>: PostgreSQL database with a RESTful API
                using Python and Flask, role-based access control authorization
                utilizing Auth0, test suite, and deployed to Heroku. <br />
                <br />
                <strong>Note:</strong>The deployment link is below but this is
                an API <em>only</em> that upon login, returns a JWT with the
                appropriate role-based auth to the screen to access the API.
                Currently there is no interactive front-end written.
              </span>
            }
            image={castingAgency}
            demo="https://kep-casting-agency.herokuapp.com/"
            github="https://github.com/Keparoo/casting-agency"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectList;
