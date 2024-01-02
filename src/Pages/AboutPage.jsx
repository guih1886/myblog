import React from 'react';
import Photo from '../Assets/Images/img1.jpeg';
import CV from '../Assets/Documents/CV_Guilherme.pdf';
import '../CSS/About.css';
import { SiTypescript, SiReact, SiPython, SiJava, SiDotnet, SiAngular } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <div className="content">
      <div className='about'>
        <div className="photo">
          <img className='img-about' src={Photo} alt="Foto" />
        </div>
        <div className="icons">
          <SiJava />
          <SiPython />
          <SiDotnet />
          <FaNodeJs />
          <SiTypescript />
          <SiReact />
          <SiAngular />
        </div>
        <div className="info">
          <h3>
            <p>
              Olá! Sou Guilherme Henrique, um entusiasta da tecnologia de 29 anos e desenvolvedor Back-end, localizado em Vargem Grande do Sul - SP.
            </p>
            <p>
              Minha paixão pela tecnologia despertou cedo e moldou minha trajetória. Aos 14 anos, desenvolvi um servidor de jogo online usando LUA, arquivos XML e um banco de dados gerenciado com SQLlite.
              Essa experiência inicial foi o ponto de partida para minha jornada na área de <strong>Ciência da Computação</strong>, inicialmente focada em banco de dados. No entanto, foi durante meus estudos na faculdade
              que descobri minha verdadeira paixão pela programação ao mergulhar no mundo do <strong>Java</strong>.
            </p>
            <p>
              Ao longo dos anos, tenho me dedicado ao aprimoramento contínuo, explorando linguagens como <strong>Java, .NET, Python, Golang e NodeJS</strong>, além de seus frameworks, como Django e Spring,
              concentrando-me principalmente no desenvolvimento Back-end. Para o Front-end, tenho explorado <strong>React, Angular e TypeScript</strong> em diferentes projetos. Meu conjunto de habilidades também inclui
              experiência em ferramentas e tecnologias como <strong>Docker, AWS, MySQL, SQL Server, PostgreSQL</strong> e uma formação específica em DevOps. Além disso, estou familiarizado com metodologias como <strong>TDD, DDD,
                Scrum e Kanban</strong>, entre outras.
            </p>
            <p>
              Acredito firmemente que o aprendizado contínuo é a chave para o crescimento profissional e estou constantemente buscando novos conhecimentos. Sou formado e atualmente estudo Análise e Desenvolvimento de Sistemas, buscando
              constantemente aprimorar-me através também de cursos na plataforma Alura. Meu objetivo principal é encontrar oportunidades de estágio, trainee ou posições júnior em áreas como Back-end, Mobile ou Web.
            </p>
            <p>
              Se você estiver interessado em colaborar ou gostaria de entrar em contato, fique à vontade para me enviar uma mensagem através dos contatos fornecidos <a href="/contact"><strong>aqui</strong></a>.
            </p>
          </h3>
        </div>
        <div className="downloads">
          <div className="a-btn">
            <a href="https://cursos.alura.com.br/vitrinedev/guih1886" target='_blank' rel='noreferrer'>
              <button className='button'>Alura Vitrine.dev</button>
            </a>
            <a href="https://cursos.alura.com.br/user/guih1886/fullCertificate/667187f6cd9932b6a89a3cf0ebac711c" target='_blank' rel='noreferrer'>
              <button className='button'>Meus certificados</button>
            </a>
            <a href={CV} target='_blank' rel='noreferrer'>
              <button className='button'>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

}
