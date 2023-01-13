import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar() {
    return (
        <>
            <div className="menu-section">
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>

                < nav className='navbar' >
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>Sobre</Link>
                        </li>
                        <li>
                            <Link to={'/projects'}>Projetos</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contato</Link>
                        </li>
                    </ul>
                </nav >
            </div>
        </>
    );
}