import React from 'react';
// import { Tooltip } from '@mui/material';
// import { Tooltip as mdTooltip } from '../Tooltip/Tooltip';
import { Tooltip } from '../Tooltip/Tooltip';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';
import IconMastodon from '../IconMastodon';

import resume from '/src/static/kep-kaeppeler-resume.2.23.1.pdf';

import styles from './About.module.css';

const Bio = () => {
  return (
    <section className={styles.bio} aria-label="Kep's biography">
      <h3 className={`secondary-subheading ${styles.aboutFedi}`}>
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
      <p className={styles.body}>
        Every day I play the piano, further my French &amp; German language
        skills, and practice mindfulness &amp; meditation.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section className={styles.skills} aria-label="List of skills">
      <h3 className="secondary-subheading">Skills:</h3>

      <p className={styles.body}>
        <span className="fw-bold">Frontend</span>: HTML5, CSS3, JavaScript ES6,
        TypeScript, AJAX, Flask, React, Storybook, d3, Redux, Next.js,
        Bootstrap, Material UI, Tailwind
      </p>

      <p className={styles.body}>
        <span className="fw-bold">Backend</span>: Python, PHP, Node.js, Express,
        Axios, SQL, PostgreSQL, SQLAlchemy, OAuth
      </p>

      <p className={styles.body}>
        <span className="fw-bold">Testing</span>: Jest, Vitest, Supertest,
        PyTest
      </p>

      <p className={styles.body}>
        <span className="fw-bold">Development</span>: Linux, Unix, Git, GitHub,
        VS Code, PyCharm, ZenHub, <br />
        Agile workflow, Data Structures, Algorithms, Deployment, Windows, Mac,
        Android, Vite, Heroku, Netlify, Vercel, Digital Ocean, Surge
      </p>

      <p className={styles.body}>
        <span className="fw-bold">Design</span>: Figma, Typography, Affinity
        Design Suite, Adobe Creative Suite
      </p>

      <p className={styles.body}>
        This website was created with <span className="fw-bold">React v18</span>{' '}
        in a Vite environment using <span className="fw-bold">Material UI</span>{' '}
        components. <br />I have since redesigned and refactored the site
        replacing the Material UI components with my own React components built
        from scratch with vanilla <strong>JavaScript ES6</strong> and{' '}
        <strong>CSS5</strong> to allow for greater customization.
      </p>
      <p>
        Recently finished was the TextField/TextArea form components.
        <br />
        Currently, I'm working on more accessible Tooltip components.
        <br /> See my{' '}
        <a
          className="link"
          href="https://github.com/Keparoo/kepweb"
          target="_blank"
        >
          sourcecode.
        </a>
      </p>
    </section>
  );
};

const Fediverse = () => {
  return (
    <section className={styles.fediverse} aria-label="Mastodon links and info">
      <h3 className={`secondary-subheading ${styles.fediHeading}`}>
        I've joined the Fediverse!
      </h3>

      <p className={`${styles.fediBody} ${styles.body}`}>
        Come join me and the many others that have become part of the{' '}
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

      <p className={styles.body}>
        To migrate your Twitter follows/followers on Mastodon, try{' '}
        <a
          className="link"
          rel="noopener"
          href="https://debirdify.pruvisto.org/"
          target="_blank"
        >
          Debirdify{' '}
        </a>
        or{' '}
        <a
          className="link"
          rel="noopener"
          href="https://www.movetodon.org/"
          target="_blank"
        >
          Movetodon.org
        </a>
      </p>

      <p className={styles.body}>
        Although my Twitter link is below, my current engagement is on Mastedon
        as I find the sense of community stronger and supportive; also, I prefer
        supporting a decentralized open-source social media platform where
        content, data, and the social graph belong to the users rather than a
        single person or corporation. Mastodon's feed is determined by
        engagement and post time: not ad revenue or algorithm.
      </p>
      <p className={styles.body}>
        <a
          className="link"
          rel="noopener"
          href="https://www.fosstodon.org/"
          target="_blank"
        >
          Fosstodon.org
        </a>{' '}
        is a Mastodon instance that has formed a community of like-minded people
        who support and enjoy Free & Open Source Software (FOSS).
      </p>
      <p>
        <strong>I am a monthly Patreon donor to my Mastodon instance.</strong>
      </p>
    </section>
  );
};

const Links = () => {
  return (
    <section aria-label="Social media and resume links">
      <h3 className="secondary-subheading">Links:</h3>

      <div>
        <p>
          <EmailIcon className={styles.icon} />
          <Tooltip
            title="Send me an email from your browser"
            type="left"
            enterTouchDelay={0}
          >
            <a
              className={`button btn-link ${styles.link}`}
              href="mailto:kep@kepweb.dev"
              target="_blank"
              rel="noopener"
            >
              Kep@kepweb.dev
            </a>
          </Tooltip>
        </p>

        <p>
          <LinkedInIcon className={styles.icon} />
          <Tooltip
            title="Open my LinkedIn page"
            type="left"
            enterTouchDelay={0}
          >
            <a
              className={`button btn-link ${styles.link}`}
              href="https://www.linkedin.com/in/kep-kaeppeler"
              target="_blank"
              rel="noopener"
            >
              LinkedIn.com/in/kep-kaeppeler
            </a>
          </Tooltip>
        </p>

        <p>
          <GitHubIcon className={styles.icon} />
          <Tooltip title="Open my GitHub page" type="left" enterTouchDelay={0}>
            <a
              className={`button btn-link ${styles.link}`}
              href="https://github.com/Keparoo"
              target="_blank"
              rel="noopener"
            >
              Github.com/Keparoo
            </a>
          </Tooltip>
        </p>

        <div>
          <IconMastodon className={styles.icon} />

          <Tooltip
            title="Open my Mastodon Page"
            type="left"
            enterTouchDelay={0}
          >
            <a
              className={`button btn-link ${styles.link}`}
              rel="me noopener"
              href="https://fosstodon.org/@Kep"
              target="_blank"
            >
              @Kep@fosstodon.org
            </a>
          </Tooltip>
        </div>

        <p>
          <TwitterIcon className={styles.icon} />
          <Tooltip title="Open my Twitter page" type="left" enterTouchDelay={0}>
            <a
              className={`button btn-link ${styles.link}`}
              href="https://twitter.com/KepKaeppeler"
              target="_blank"
              rel="noopener"
            >
              Twitter.com/KepKaeppeler
            </a>
          </Tooltip>
        </p>

        <p>
          <ArticleIcon className={styles.icon} />
          <a
            className={`button btn-link ${styles.link}`}
            href={resume}
            target="_blank"
            download="kep-kaeppeler-resume"
          >
            Download my resume
          </a>
        </p>

        <p>
          <PrintIcon className={styles.icon} />
          <a
            className={`button btn-link ${styles.link}`}
            href={resume}
            target="_blank"
          >
            View or print my resume
          </a>
        </p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className={`${styles.about} padding-block-900`}>
      <div className={styles.columns}>
        <div>
          <h2 className="secondary-heading">About Me</h2>
        </div>

        <div>
          <section className={styles.aboutContent}>
            <Bio />
            <Skills />
            <Fediverse />
            <Links />
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
