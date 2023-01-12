import React from 'react';
import '../CSS/Home.css';

export default function HomePage() {
  return (
    <div className="content">
      <div className="home">
        <p className='greetings'>
          <h1>Olá, seja bem vindo ao meu site!</h1>
          <h2>Aqui você poderá encontrar um pouco mais de informações sobre mim, meus projetos desenvolvidos, meus contatos além de ter disponível meu currículo atualizado!</h2>
        </p>
        <div className="img-home">
          <img src="https://i.pinimg.com/originals/21/11/61/21116158daaeb1459b4ec0758505e1ad.gif" alt="Programando" />
        </div>
      </div>
    </div>
  );
}
