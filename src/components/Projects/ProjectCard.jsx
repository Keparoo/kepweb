import React, { useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { Tooltip } from '@mui/material';

import styles from './ProjectCard.module.css';

export default function ProjectCard({
  title,
  description,
  backend,
  frontend,
  note,
  image,
  demo,
  github,
}) {
  const [isClosed, setIsClosed] = useState(true);

  const toggleCard = (e) => {
    setIsClosed((isClosed) => !isClosed);
  };

  return (
    <article className={styles.card}>
      <header className={styles.title}>{title}</header>

      <img src={image} className={styles.image} alt={title} />

      <section className={styles.content}>
        <div className={isClosed ? `${styles.previewText}` : ''}>
          <div>{description}</div>
          <p className={styles.backend}>{backend}</p>
          <p className={styles.frontend}>{frontend}</p>
          <p className={styles.note}>{note}</p>
        </div>

        {isClosed ? (
          <button
            aria-label="Continue reading"
            className={`button btn-outline btn-small ${styles.toggleButton}`}
            onClick={toggleCard}
          >
            Continue Reading
          </button>
        ) : (
          <button
            aria-label="Continue reading"
            className={`button btn-outline btn-small ${styles.toggleButton}`}
            onClick={toggleCard}
          >
            Close
          </button>
        )}
      </section>

      <nav className={styles.nav} aria-label="Card Project Navigation">
        <Tooltip title="Open page to project deployment">
          <a
            className="button btn-small"
            href={demo}
            target="_blank"
            aria-label="App Demo"
          >
            <span className={styles.buttonIcon}>
              <WebIcon fontSize="small" />
            </span>{' '}
            <span className={styles.buttonText}>Demo</span>
          </a>
        </Tooltip>

        <Tooltip title="Open page to project repository" enterTouchDelay={0}>
          <span className={styles.githubButton}>
            <a
              className="button btn-small btn-outline"
              href={github}
              target="_blank"
              aria-label="GitHub repository"
            >
              <span className={styles.buttonIcon}>
                <GitHubIcon fontSize="small" />
              </span>
              <span className={styles.buttonText}>Github</span>
            </a>
          </span>
        </Tooltip>
      </nav>
    </article>
  );
}
