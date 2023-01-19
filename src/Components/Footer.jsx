import React from 'react';
import '../CSS/Footer.css';

function getDate() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    return anoAtual;
}

export default function Footer() {
    return (
        <div className='footer'>
            <p>Desenvolvido por Guilherme Henrique | {getDate()}</p>
        </div>
    );
}
