import React from 'react';
import '../CSS/ProjectItem.css';

export default function ProjectItem({ media, title, description, linkGit, route }) {
    return (
        <div className="main">
            <div className="container-item">
                <div className="media">
                    <img className='img-media' src={media} alt="Foto do projeto" />
                </div>
                <div className="title">{title}</div>
                <div className="description">
                    <text>
                        {description}
                    </text>
                </div>
                <div className="links">
                    {/* <a className='a-btn-item' href={route} target='_parent' rel='noreferrer'>
                        <button className='button'>Página</button>
                    </a> */}
                    <a className='a-btn-item' href={linkGit} target='_blank' rel='noreferrer'>
                        <button className='button'>GitHub</button>
                    </a>

                </div>
            </div>
        </div>
    );
}