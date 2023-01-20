import React, { useEffect } from 'react';
import '../CSS/ProjectItem.css';

export default function ProjectItem({ media, mediaWidth, mediaHeight, title, description, linkGit, route, disableLink, disableLinkGit, titleLinkButton }) {
    function zoom() {
        // (A) GET ALL IMAGES
        let all = document.getElementsByTagName('img');
        // (B) CLICK TO GO FULLSCREEN
        if (all.length > 0) {
            for (let i of all) {
                i.onclick = () => {
                    // (B1) EXIT FULLSCREEN
                    if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
                        if (document.exitFullscreen) { document.exitFullscreen(); }
                        else { document.webkitCancelFullScreen(); }
                    }
                    // (B2) ENTER FULLSCREEN
                    else {
                        if (i.requestFullscreen) { i.requestFullscreen(); }
                        else { i.webkitRequestFullScreen(); }
                    }
                };
            }
        }
    };

    useEffect(() => {
        zoom();
    }, [])

    return (
        <div className="main">
            <div className="container-item">
                <div className="media">
                    <img className='img-media' onClick={e => zoom()} style={{ width: mediaWidth, height: mediaHeight }} src={media} alt="Foto do projeto" />
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
