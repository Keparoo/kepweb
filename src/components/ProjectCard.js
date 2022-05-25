import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

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
    <Card sx={{ maxWidth: 400, marginTop: '20px' }}>
      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          <br />
          {backend} <br />
          {frontend}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component="a" href={demo} target="_blank" size="small">
          Demo
        </Button>
        <Button component="a" href={github} target="_blank" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
}
