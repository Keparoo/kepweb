import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 360, marginTop: '20px' }}>
      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Demo</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}
