import React from 'react';
import Photo from '../Assets/Images/img1.jpeg';
import CV from '../Assets/Documents/CV_Guilherme.pdf';
import '../CSS/About.css';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython, SiPhp, SiJava } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <div className="content">
      <div className='about'>
        <div className="photo">
          <img className='img-about' src={Photo} alt="Foto" />
        </div>
        <div className="icons">
          <SiReact />
          <SiJavascript />
          <SiHtml5 />
          <SiCss3 />
          <SiPhp />
          <SiJava />
          <FaNodeJs />
          <SiPython />
        </div>
        <div className="info">
          <h3>
            <p>
              Meu nome é Guilherme Henrique, tenho 28 anos e sou um desenvolvedor Front-end de Vargem Grande do Sul - SP, apaixonado por tecnologia desde jovem.
            </p>
            <p>
              Minha jornada na área começou aos 14 anos, quando desenvolvi um servidor de jogo online em LUA, com arquivos XML, e um banco de dados gerenciado com SQLlite. Embora não imaginasse na época, isso me levou a estudar <strong>Ciência da Computação</strong>, com foco inicial em banco de dados, até que descobri minha paixão pela programação ao aprender Java na faculdade.
            </p>
            <p>
              Desde então, venho estudando <strong>JavaScript e seus frameworks, incluindo React, React Native para Android e Angular</strong>, e outras tecnologias como <strong>HTML, LESS, Express, NodeJS, TypeScript, Java, Spring Boot, PHP, Python</strong> e bancos de dados relacionais e não relacionais como MySQL e MongoDB.
            </p>
            <p>
              Atualmente, cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e estou em busca de oportunidades <strong>estágio, trainee ou júnior em Front-end, Back-end ou Mobile</strong>. Confiante em meus conhecimentos e habilidades para contribuir com as empresas e projetos nos quais venha a trabalhar.
            </p>
          </h3>
        </div>
        <div className="downloads">
          <div className="a-btn">
            <a href="https://cursos.alura.com.br/vitrinedev/guih1886" target='_blank' rel='noreferrer'>
              <button className='button'>Alura Vitrine.dev</button>
            </a>
            <a href="https://onedrive.live.com/?authkey=%21AH35waqxWtL%5Frb8&id=403E62CB16C6E48D%2184126&cid=403E62CB16C6E48D" target='_blank' rel='noreferrer'>
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
