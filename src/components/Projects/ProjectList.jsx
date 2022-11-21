import React from 'react';

import ProjectCard from './ProjectCard';

import maple from '../../static/maple-700x440.jpg';
import tapntable from '../../static/tapntable-700x440.jpg';
import tuttitracks from '../../static/tuttitracks-700x440.jpg';
import castingAgency from '../../static/castingAgency-700x440.jpg';
import jobly from '../../static/jobly-700x440.jpg';
import connect4 from '../../static/connect-4-700x440.jpg';

import { Box, Grid, Typography } from '@mui/material';

const ProjectList = () => {
  return (
    <section>
      <Box sx={{ flexGrow: 1, paddingBottom: '4.5em' }}>
        <Typography variant="h2" id="projects" className="sectionHeading">
          Projects
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          spacing={4}
        >
          <Grid item md={6} lg={4}>
            <ProjectCard
              title="MAPLE"
              variant="div"
              description={
                <div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    <strong>
                      Massachusetts Platform for Legislative Engagement
                    </strong>
                  </Typography>
                  A project initiative currently under development by{' '}
                  <strong>Code for Boston</strong>, a <em>Code for America</em>{' '}
                  brigade and grassroots organization.
                  <br />I work with a team of volunteer designers and developers
                  on this project which endeavors to produce a digital public
                  space wherein Massachusetts constituents can share their
                  expertise, stories, and opinions on the legislation that
                  shapes their lives.
                </div>
              }
              backend={
                <p>
                  <strong>Backend:</strong> Firebase with React-Firebase-Hooks
                </p>
              }
              frontend={
                <p>
                  <strong>Frontend:</strong> React, TypeScript, Javascript,
                  Next.js, Storybook, and Bootstrap
                </p>
              }
              note={
                <p>
                  <strong>Note: </strong>Currently, this web app is user testing
                  and preparing for a late fall limited-feature beta rollout and
                  a January 1.0 release.
                </p>
              }
              image={maple}
              demo="https://mapletestimony.org/"
              github="https://github.com/codeforboston/advocacy-maps"
            />
          </Grid>

          <Grid item md={6} lg={4}>
            <ProjectCard
              title="Tapntable"
              description={
                <div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    <strong>Restaurant Point of Sale</strong>
                  </Typography>
                  A web-based restaurant point-of-sale system (POS) creating an
                  application for servers, bartenders, and managers to run
                  restaurant operations including orders, timeclock, and
                  inventory.
                </div>
              }
              backend={
                <p>
                  <strong>Backend:</strong> A PostgreSQL database with a RESTful
                  API using Node.js, Express, and a Jest test suite.
                </p>
              }
              frontend={
                <p>
                  <strong>Frontend:</strong> A single-page app using React,
                  Redux, and Axios to implement a user interface for managing
                  orders, checks, payments, end-of-day reconciliation, sales
                  reports, timeclock, and database management.
                </p>
              }
              note={
                <span>
                  <strong>Note: </strong>The deployed site will allow a user to
                  log in with a demo-pin: 12345 to try out the app authorizing a
                  subset of features.
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
                <div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    <strong>Spotify Playlist Creation Tool</strong>
                  </Typography>
                  A web app leveraging the Spotify API to search for and save
                  song tracks and audio information including tempo, time
                  signature, and key. A user can create, edit, and listen to
                  playlists that may be uploaded to the user's Spotify account.
                </div>
              }
              backend={
                <p>
                  <strong>Backend</strong>: Python with a PostgreSQL database, a
                  RESTful API, SQLAlchemy ORM, Oauth authorization, interface to
                  the Spotify API, and a test suite using unittest.
                </p>
              }
              frontend={
                <p>
                  <strong>Frontend</strong>: Python, Flask, and Jinja2.
                </p>
              }
              note={
                <span>
                  <strong>Note:</strong> In order to use the app, if the user is
                  not currently logged into their Spotify account they will be
                  directed to login or signup using OAuth. A user may then
                  create a Tuttitracks account to create and manage playlists.
                </span>
              }
              image={tuttitracks}
              demo="https://spotiflavor.herokuapp.com/"
              github="https://github.com/Keparoo/Tuttitracks"
            />
          </Grid>

          <Grid item md={6} lg={4}>
            <ProjectCard
              title="Jobly"
              description={
                <div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    <strong>Job Listing Web App</strong>
                  </Typography>
                  A web app for searching, exploring and applying for listed
                  jobs on a job posting site.
                </div>
              }
              backend={
                <p>
                  <strong>Backend</strong>: A PostgreSQL database with a RESTful
                  API using Node.js and Express with a comprehensive test suite
                  written in Jest. The app implements role based authorization
                  using JWTs, manages data validation with json schema, and is
                  currently deployed to Heroku.
                </p>
              }
              frontend={
                <p>
                  <strong>Frontend:</strong> A Single-page React app using
                  React-Router for routing and protecting routes based on JWT
                  permissions, and local storage to manage user persistence. It
                  is currently deployed using Surge.
                </p>
              }
              note={
                <span>
                  <strong>Note: </strong>The deployed site will allow a user to
                  log in with username: 'testuser' and password 'password' for
                  demonstration purposes with limited permissions.
                </span>
              }
              image={jobly}
              demo="https://hot-soap.surge.sh/"
              github="https://github.com/Keparoo/Jobly"
            />
          </Grid>

          <Grid item md={6} lg={4}>
            <ProjectCard
              title="Casting Agency"
              description={
                <div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    <strong>Casting Agency Management App</strong>
                  </Typography>
                  A web API to manage movies and actor assignments for a casting
                  agency.
                </div>
              }
              backend={
                <p>
                  <strong>Backend</strong>: A PostgreSQL database with a RESTful
                  API using Python and Flask, role-based access control
                  authorization utilizing Auth0, test suite, and currently
                  deployed to Heroku.
                </p>
              }
              note={
                <span>
                  <strong>Note:</strong> The deployment link is below but this
                  is an API <em>only</em> that upon login, returns a JWT with
                  the appropriate role-based auth to the screen to access the
                  API. Currently there is no interactive front-end.
                </span>
              }
              image={castingAgency}
              demo="https://kep-casting-agency.herokuapp.com/"
              github="https://github.com/Keparoo/casting-agency"
            />
          </Grid>

          <Grid item md={6} lg={4}>
            <ProjectCard
              title="Connect 4"
              description={
                <div>
                  <Typography variant="subtitle2" align="center" gutterBottom>
                    <strong>Classic Game</strong>
                  </Typography>
                  A simple vanilla Javascript web app implementing the game
                  Connect 4 deployed to Vercel.
                </div>
              }
              frontend={
                <p>
                  <strong>Frontend: </strong>This project was created using only
                  HTML5, and CSS3 without the use of any frameworks or
                  libraries.
                </p>
              }
              image={connect4}
              demo="https://connect4-keparoo.vercel.app/"
              github="https://github.com/Keparoo/Connect4"
            />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default ProjectList;