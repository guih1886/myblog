import React from 'react';
import '../CSS/Projects.css';
import ProjectItem from '../Components/ProjectItem';
import flappy from '../Documents/flappy.png';
import crud from '../Documents/crud.png';
import galeria from '../Documents/galeria.png';
import backsale from '../Documents/backsale.png';
import cotacao from '../Documents/cotacao.png';
import targetSum from '../Documents/targetSum.jpeg';


export default function ProjectsPage() {
  return (
    <div className="content">
      <div className='project'>
        <div className="projects-list">
          <ProjectItem media={flappy} title="Flappy Bird" route='/flappy' description={'Projeto flappy bird desenvolvido em CSS e JavaScript, o qual é uma réplica do jogo que ficou famoso em 2013.'} linkGit={'https://github.com/guih1886/Projetos/tree/main/Front-End/Projeto_FlappyBird'} />
          <ProjectItem media={crud} title='CRUD React' route='/crudReact' description='Projeto de cadastros CRUD em que é possível incluir, alterar e excluir o cadastro de usuários. Foi desenvolvido com React e bootstrap no frontend e json-server no backend.' linkGit={'https://github.com/guih1886/Projetos/tree/main/Front-End/Cadastro_Usuarios'} />
          <ProjectItem media={galeria} title="Projeto Galeria" description={'Projeto de galeria de fotos, aonde é possível fazer um filtro por cidades desenvoldido com HTML, JavaScript e SCSS.'} route={'/galeria'} linkGit={'https://github.com/guih1886/Projetos/tree/main/Front-End/Projeto_Galeria'} />
          <ProjectItem media={backsale} title="Backsale" description={'Projeto backsale é um aplicativo fictício de vendas de cursos em benefício de instituições filantrópicas. Desenvolvido para Android em React Native. No repositório é possível fazer o download do APK.'} linkGit="https://github.com/guih1886/Projetos/tree/main/Android/Bakesale" />
          <ProjectItem media={targetSum} title="Target Sum" description={'Projeto do target sum é um jogo simples, aonde é mostrado um valor alvo e o usuário deve selecionar os 4 valores que resultem na soma do desse valor, foi desenvolvido em React Native. No repositório é possível fazer o download do APK.'} linkGit="https://github.com/guih1886/Projetos/tree/main/Android/TargetSum" />
          <ProjectItem media={cotacao} title='Cotação - Andamento' description={'Projeto de um sistema de cotações, ainda em andamento. Com a necessidade de um sistema de cotação na empresa em que trabalho, vi a oportunidade de desenvolvê-lo. Por conter informações sensíveis, não estou disponibilizando o repositório.'} />
        </div>
      </div>
    </div>
  );
}
