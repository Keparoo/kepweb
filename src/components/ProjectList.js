import React from 'react';
import ProjectCard from './ProjectCard';
import testImage from '../static/testImage.jpg';

const ProjectList = () => {
  return (
    <div>
      <ProjectCard title="Tapntable" description="" image={testImage} />
      <ProjectCard title="TuttiTracks" description="" image={testImage} />
      <ProjectCard title="Casting Agency" description="" image={testImage} />
      <ProjectCard title="Lorem Ipsum" description="" image={testImage} />
    </div>
  );
};

export default ProjectList;
