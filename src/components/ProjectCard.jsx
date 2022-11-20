import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import Typography from '@mui/material/Typography';
import { Button, CardHeader, Tooltip } from '@mui/material';

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
    <Card sx={{ maxWidth: 350, marginTop: '1.25em' }}>
      <CardHeader title={title} />

      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <div
          variant="body2"
          component="article"
          color="text.secondary"
          className={isClosed ? 'card_preview-text' : ''}
        >
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ paddingTop: '.25rem' }}
          >
            {backend}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ paddingTop: '.25rem' }}
          >
            {frontend}
          </Typography>
          <Typography variant="body2" component="p" sx={{ paddingTop: '1rem' }}>
            {note}
          </Typography>
        </div>
        {isClosed ? (
          <Button
            variant="outlined"
            size="small"
            aria-label="Continue reading"
            sx={{ float: 'right', marginTop: '.75rem' }}
            onClick={toggleCard}
          >
            Continue Reading
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="small"
            aria-label="Continue reading"
            sx={{ float: 'right', marginTop: '.75rem' }}
            onClick={toggleCard}
          >
            Close
          </Button>
        )}
      </CardContent>
      <CardActions sx={{ marginTop: '3rem' }}>
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
          >
            Github
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
