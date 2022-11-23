import React, { useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { Button, Tooltip } from '@mui/material';

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
          <Button
            variant="outlined"
            size="small"
            aria-label="Continue reading"
            className={styles.toggleButton}
            onClick={toggleCard}
          >
            Continue Reading
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="small"
            aria-label="Continue reading"
            className={styles.toggleButton}
            onClick={toggleCard}
          >
            Close
          </Button>
        )}
      </section>

      <nav className={styles.nav} aria-label="Card Project Navigation">
        <Tooltip title="Open page to project deployment">
          <Button
            variant="contained"
            href={demo}
            target="_blank"
            size="small"
            aria-label="App Demo"
            startIcon={<WebIcon />}
          >
            Demo
          </Button>
        </Tooltip>
        <Tooltip title="Open page to project repository" enterTouchDelay={0}>
          <Button
            variant="outlined"
            href={github}
            target="_blank"
            size="small"
            aria-label="GitHub repository"
            startIcon={<GitHubIcon />}
            sx={{ marginLeft: '16px' }}
          >
            Github
          </Button>
        </Tooltip>
      </nav>
    </article>
  );
}
