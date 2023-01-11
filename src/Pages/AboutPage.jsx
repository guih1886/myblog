import React from 'react';
import Photo from '../Documents/img1.jpeg';
import CV from '../Documents/CV_Guilherme.pdf';
import '../CSS/About.css';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython, SiPhp } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <div className="content">
      <div className='about'>
        <div className="photo">
          <img src={Photo} alt="Foto" />
        </div>
        <div className="icons">
          <SiReact size={55} />
          <SiJavascript size={55} />
          <SiHtml5 size={55} />
          <SiPhp size={55} />
          <SiCss3 size={55} />
          <FaNodeJs size={55} />
          <SiPython size={55} />
        </div>
        <div className="info">
          <p>
            <h3>Olá, me chamo Guilherme Henrique, tenho 28 anos, moro em Vargem Grande do Sul - SP e sou um <strong>desenvolvedor Front-end!</strong></h3>
            <h3>Desde pequeno sempre fui apaixonado por tecnologia, minha experiência começou sem percepção aos 14 anos, quando desenvolvi
              um servidor de um jogo online o qual eu amava na época, todo programado em LUA e com arquivos XML, .config e um banco de dados
              gerenciado com SQL lite! Naquela época e nem imaginava que seguiria esse caminho como profissão.</h3>
            <h3>Mais tarde iniciei os estudos no campo de <strong>Ciência da Computação</strong>, o qual meu foco inicial era trabalhar com banco de dados,
              mas mudei com o tempo para programação após as aulas de Java na faculdade.</h3>
          </p>
        </div>
        <div className="info2">
          <p>
            <h3>
              Começei então a estudar <strong>JavaScript</strong> e seus frameworks, como <strong>React, React Native</strong> para Android e Vue... mas o React me ganhou, e
              estou em busca de aprendizado para ele. Adquiri também conhecimentos em outras tecnologias como <strong>HTML, CSS, Gulp, jQuery, NextJS,
                PHP, NodeJS, Python, SQL e MongoDB.</strong>
            </h3>
            <br />
            <h3>
              Hoje, estou a procura de uma oportunidade de <strong>estágio ou trainee</strong> na parte de <strong>Front-end, Back-end ou Mobile</strong>. Tenho bons conhecimentos
              e acredito que irei conseguir essa oportunidade em breve!
            </h3>
          </p>
        </div>
        <div className="downloads">
          <a className='a-btn' href="https://onedrive.live.com/?authkey=%21AH35waqxWtL%5Frb8&id=403E62CB16C6E48D%2184126&cid=403E62CB16C6E48D" target='_blank' rel='noreferrer'>
            <button className='button'>Meus certificados</button>
          </a>
          <a className='a-btn' href={CV} target='_blank' rel='noreferrer'>
            <button className='button'>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}
