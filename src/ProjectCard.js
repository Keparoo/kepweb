import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton, Tooltip } from '@mui/material';

export default function ProjectCard({
  title,
  description,
  backend,
  frontend,
  image,
  demo,
  github
}) {
  return (
    <Card sx={{ maxWidth: 350, marginTop: '20px' }}>
      <CardHeader title={title} />

      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
          <br />
          {backend} <br />
          {frontend}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          href={demo}
          target="_blank"
          size="small"
          aria-label="App Demo"
        >
          <Tooltip title="Go to project deployment">
            <WebIcon />
          </Tooltip>
        </IconButton>
        <IconButton
          href={github}
          target="_blank"
          size="small"
          aria-label="GitHub repository"
        >
          <Tooltip title="Go to project repository" enterTouchDelay={0}>
            <GitHubIcon />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Card>
  );
}
