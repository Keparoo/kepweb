import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import Typography from '@mui/material/Typography';
import { Button, CardHeader, IconButton, Tooltip } from '@mui/material';

export default function ProjectCard({
  title,
  description,
  backend,
  frontend,
  image,
  demo,
  github,
}) {
  return (
    <Card sx={{ maxWidth: 350, marginTop: '1.25em' }}>
      <CardHeader title={title} />

      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" component="article" color="text.secondary">
          {description}
          {backend} <br />
          {frontend}
        </Typography>
      </CardContent>
      <CardActions>
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
