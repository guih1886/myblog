import React from 'react';
import '../CSS/Projects.css';
import ProjectList from '../Components/ProjectList';


export default function ProjectsPage() {
  return (
    <div className="content">
      <div className='project'>
        <div className="projects-list">
          <ProjectList />
          <a className='a-btn-projects' href={'https://github.com/guih1886/myblog'} target='_blank'
            rel='noreferrer'>
            <button className='button-projects'>Repositório do site</button>
          </a>
        </div>
      </div>
    </div>
  );
}
