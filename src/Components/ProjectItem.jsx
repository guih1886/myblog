import React from 'react';
import '../CSS/ProjectItem.css';

export default function ProjectItem({ media, title, description, linkGit, route, disableLink, disableLinkGit, titleLinkButton }) {
    return (
        <div className="main">
            <div className="container-item">
                <div className="media">
                    <img className='img-media' src={media} alt="Foto do projeto" />
                </div>
                <div className="title">{title}</div>
                <div className="description">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="links">
                    {disableLink ?
                        ''
                        :
                        <a className='a-btn-item' href={route} target='_parent' rel='noreferrer'>
                            <button className='button-item'>{titleLinkButton ? titleLinkButton : 'Página'}</button>
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
