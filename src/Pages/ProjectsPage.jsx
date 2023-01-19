import React from 'react';
import '../CSS/Projects.css';
import ProjectList from '../Components/ProjectList';


export default function ProjectsPage() {
  return (
    <div className="content">
      <div className='project'>
        <div className="projects-list">
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
