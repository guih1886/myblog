import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar() {
    return (
        <>
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
        </>
    );
}