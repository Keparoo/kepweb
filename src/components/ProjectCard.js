import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
