import React from 'react';
import '../CSS/ProjectItem.css';

export default function ProjectItem({ media, title, description, linkGit, route, disableLink, disableLinkGit }) {
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
                    {disableLink ?
                        ''
                        :
                        <a className='a-btn-item' href={route} target='_parent' rel='noreferrer'>
                            <button className='button-item'>Página</button>
                        </a>
                    }
                    {disableLinkGit ?
                        ''
                        :
                        <a className='a-btn-item' href={linkGit} target='_blank' rel='noreferrer'>
                            <button className='button-item'>GitHub</button>
                        </a>
                    }

                </div>
            </div>
        </div>
    );
}
