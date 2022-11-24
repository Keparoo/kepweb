import React from 'react';
import { Button, Tooltip } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';
// import MastodonIcon from '/src/static/mastodon.svg';
import IconMastodon from '../IconMastodon';

import resume from '/src/static/kep-kaeppeler-resume.11.1.pdf';

import styles from './About.module.css';

const Bio = () => {
  return (
    <section className={styles.bio} aria-label="Kep's biography">
      <h3 className={`${styles.subheading} ${styles.aboutFedi}`}>
        Hi, I'm Kep
      </h3>
      <p className={`${styles.body} ${styles.fediBody}`}>
        I’m a JavaScript, TypeScript, Node, React, Redux, Python, Flask, and SQL
        developer with graphic design skills who loves to capture the
        personality and zeitgeist of a client in the websites and printed
        materials that represent them. Over the past decade, I have created
        websites, social media campaigns, brand identities, restaurant menus,
        advertisements, and signage for businesses on Cape Cod to establish for
        them more vital branding, greater community recognition, and increased
        customer volume.
      </p>
      <p className={styles.body}>
        Client training and tech support are essential to me. I excel at
        patiently working with clients until they confidently use technology to
        further their business needs.
      </p>
      <p className={styles.body}>
        My recent focus has been furthering my backend development skills
        allowing me to create a more dynamic web experience for clients.
      </p>

      <p className={styles.body}>
        I'm also a musician who spent years as a musical director and conductor
        of resident and touring productions of Broadway shows including{' '}
        <em>Joseph and the Amazing Technicolor Dreamcoat</em>, starring Patrick
        Cassidy, and <em>The King and I</em>, starring Sandy Duncan, as well as
        the keyboard programming for the <em>Celebrating Sondheim Concert</em>{' '}
        at Avery Fisher Hall, Lincoln Center, New York City.
      </p>
      <p>
        Every day I play the piano, further my French &amp; German language
        skills, and practice mindfulness &amp; meditation.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section className={styles.skills} aria-label="List of skills">
      <h3 className={styles.subheading}>Skills:</h3>

      <p className={styles.body}>
        <span className="subheading">Frontend</span>: HTML5, CSS3, JavaScript
        ES6, TypeScript, AJAX, Flask, React, Storybook, d3, Redux, Next.js,
        Bootstrap, Material UI, Tailwind
      </p>

      <p className={styles.body}>
        <span className="subheading">Backend</span>: Python, PHP, Node.js,
        Express, Axios, SQL, PostgreSQL, SQLAlchemy, OAuth
      </p>

      <p className={styles.body}>
        <span className="subheading">Testing</span>: Jest, Vitest, Supertest,
        PyTest
      </p>

      <p className={styles.body}>
        <span className="subheading">Development</span>: Linux, Unix, Git,
        GitHub, VS Code, PyCharm, ZenHub, <br />
        Agile workflow, Data Structures, Algorithms, Deployment, Windows, Mac,
        Android, Vite, Heroku, Netlify, Vercel, Digital Ocean, Surge
      </p>

      <p className={styles.body}>
        <span className="subheading">Design</span>: Figma, Typography, Affinity
        Design Suite, Adobe Creative Suite
      </p>

      <p>
        This website was created with <strong>React v18</strong> in a Vite
        environment
        <br />
        using <strong>Material UI</strong> components.
      </p>
    </section>
  );
};

const Fediverse = () => {
  return (
    <section className={styles.fediverse} aria-label="Mastodon links and info">
      <h3 className={`${styles.subheading} ${styles.fediHeading}`}>
        I've joined the Fediverse!
      </h3>

      <p className={`${styles.fediBody} ${styles.body}`}>
        Come join me and the many others that have joined the{' '}
        <a className="link" href="https://fedi.tips/" target="_blank">
          Fediverse{' '}
        </a>
        in addition to <span className="italic">or in place of—</span>
        Twitter.
      </p>
      <p className={styles.body}>
        Check out{' '}
        <a className="link" href="https://joinmastodon.org/" target="_blank">
          Mastodon
        </a>{' '}
        and find me on the Fosstodon instance. I'm currently building
        connections here (connect with me!) and more likely to be engaging and
        posting actively here than on Twitter.{' '}
        <a
          className="link"
          rel="me noopener"
          href="https://fosstodon.org/@Kep"
          target="_blank"
        >
          @Kep@fosstodon.org
        </a>
      </p>
      <p>
        To find your Twitter follows on Mastodon, try{' '}
        <a
          className="link"
          rel="noopener"
          href="https://debirdify.pruvisto.org/"
          target="_blank"
        >
          Debirdify
        </a>
      </p>
    </section>
  );
};

const Links = () => {
  return (
    <section
      className={styles.links}
      aria-label="Social media and resume links"
    >
      <h3 className={styles.subheading}>Links:</h3>

      <div>
        <p>
          <EmailIcon className={styles.link} />
          <Tooltip
            title="Send me an email from your browser"
            enterTouchDelay={0}
          >
            <Button
              className="link"
              href="mailto:kep@kepweb.dev"
              target="_blank"
              underline="hover"
              rel="noopener"
              color="inherit"
              sx={{}}
            >
              Kep@kepweb.dev
            </Button>
          </Tooltip>
        </p>

        <p>
          <LinkedInIcon className={styles.link} />
          <Tooltip title="Open my LinkedIn page" enterTouchDelay={0}>
            <Button
              className="link"
              href="https://www.linkedin.com/in/kep-kaeppeler"
              target="_blank"
              underline="hover"
              rel="noopener"
              color="inherit"
            >
              LinkedIn.com/in/kep-kaeppeler
            </Button>
          </Tooltip>
        </p>

        <p>
          <GitHubIcon className={styles.link} />
          <Tooltip title="Open my GitHub page" enterTouchDelay={0}>
            <Button
              className="link"
              href="https://github.com/Keparoo"
              target="_blank"
              underline="hover"
              rel="noopener"
              color="inherit"
            >
              Github.com/Keparoo
            </Button>
          </Tooltip>
        </p>

        <div>
          <span className={styles.link}>
            <IconMastodon />
          </span>
          <Tooltip title="Open my Mastodon Page" enterTouchDelay={0}>
            <Button
              className="link"
              rel="me noopener"
              href="https://fosstodon.org/@Kep"
              target="_blank"
              underline="hover"
              color="inherit"
            >
              @Kep@fosstodon.org
            </Button>
          </Tooltip>
        </div>

        <p>
          <TwitterIcon className={styles.link} />
          <Tooltip title="Open my Twitter page" enterTouchDelay={0}>
            <Button
              className="link"
              href="https://twitter.com/KepKaeppeler"
              target="_blank"
              underline="hover"
              rel="noopener"
              color="inherit"
            >
              Twitter.com/KepKaeppeler
            </Button>
          </Tooltip>
        </p>

        <p>
          <ArticleIcon className={styles.link} />
          <Button
            className="link"
            href={resume}
            target="_blank"
            underline="hover"
            download="kep-kaeppeler-resume"
            color="inherit"
          >
            Download my resume
          </Button>
        </p>

        <p>
          <PrintIcon className={styles.link} />
          <Button
            className="link"
            href={resume}
            target="_blank"
            underline="hover"
            color="inherit"
          >
            View or print my resume
          </Button>
        </p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className={`${styles.about} ${styles.columns}`}>
      <div>
        <h2 className="sectionHeading">About Me</h2>
      </div>

      <div>
        <section className={styles.aboutContent}>
          <Bio />
          <Skills />
          <Fediverse />
          <Links />
        </section>
      </div>
    </section>
  );
};

export default About;
