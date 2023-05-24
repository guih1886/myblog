import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import targetSumAPK from '../Assets/APK/targetSum.apk';
import bakesaleAPK from '../Assets/APK/bakesale.apk';
import flappy from '../Assets/Images/flappy.png';
import crudAngular from '../Assets/Images/crudAngular.png';
import backsale from '../Assets/Images/backsale.png';
import cotacao from '../Assets/Images/cotacao.png';
import targetSum from '../Assets/Images/targetSum.jpeg';
import aluroni from '../Assets/Images/projeto_aluroni.jpg'

export default function ProjectList() {
    return (
        <>
            <ProjectItem media={aluroni} disableLink={false} disableLinkGit={false} title='Aluroni' route='https://guih1886.github.io/projeto-aluroni/' description='Aluroni é um projeto de cardápio de restaurante desenvolvido com React e escrito em typescript, utilizando SCSS para estilização. Nesse projeto podemos executar a buscar por título, filtrar por categoria dos pratos e ordenar por preço, porção ou serving.' linkGit={'https://github.com/guih1886/projeto-aluroni'} />

            <ProjectItem media={crudAngular} disableLink={false} disableLinkGit={false} title='CRUD Angular' route='https://guih1886.github.io/desafio-angular/' description='Projeto de cadastros CRUD em que é possível incluir, alterar e excluir o cadastro de alunos. O sistema faz o calculo automático da situação do aluno e da média, desenvolvido em Angular e LESS.' linkGit={'https://github.com/guih1886/desafio-angular'} />

            <ProjectItem media={flappy} disableLink={false} disableLinkGit={false} title="Flappy Bird" route='https://guih1886.github.io/Flappy-bird/' description={'Projeto flappy bird desenvolvido em CSS e JavaScript, o qual é uma réplica do jogo que ficou famoso em 2013.'} linkGit={'https://github.com/guih1886/Flappy-bird/tree/main/docs'} />

            {/* <ProjectItem media={crud} titleLinkButton={''} disableLink={true} disableLinkGit={false} title='CRUD React' route='/crudReact' description='Projeto de cadastros CRUD em que é possível incluir, alterar e excluir o cadastro de usuários. Foi desenvolvido com React e bootstrap no frontend e json-server no backend.' linkGit={'https://github.com/guih1886/Projetos/tree/main/Front-End/Cadastro_Usuarios'} />

            <ProjectItem media={galeria} titleLinkButton={''} disableLink={true} disableLinkGit={false} title="Projeto Galeria" description={'Projeto de galeria de fotos, aonde é possível fazer um filtro por cidades desenvolvido com HTML, JavaScript e SCSS.'} route={'/galeria'} linkGit={'https://github.com/guih1886/Projetos/tree/main/Front-End/Projeto_Galeria'} /> */}

            <ProjectItem media={backsale} mediaWidth={'30%'} titleLinkButton={'Download APK'} disableLink={false} disableLinkGit={false} title="Backsale" description={'Projeto backsale é um aplicativo fictício de vendas de cursos em benefício de instituições filantrópicas. Desenvolvido para Android em React Native.'} route={bakesaleAPK} linkGit="https://github.com/guih1886/Projetos/tree/main/Android/Bakesale" />

            <ProjectItem media={targetSum} mediaWidth={'30%'} titleLinkButton={'Download APK'} disableLink={false} disableLinkGit={false} title="Target Sum" description={'Projeto do target sum é um jogo simples, aonde é mostrado um valor alvo e o usuário deve selecionar os 4 valores que resultem na soma do desse valor, foi desenvolvido em React Native.'} route={targetSumAPK} linkGit="https://github.com/guih1886/Projetos/tree/main/Android/TargetSum" />

            <ProjectItem media={cotacao} mediaWidth={'30%'} titleLinkButton={''} disableLink={true} disableLinkGit={true} title='Cotação - Andamento' description={'Projeto de um sistema de cotações, ainda em andamento. Com a necessidade de um sistema de cotação na empresa em que trabalho, vi a oportunidade de desenvolvê-lo. Por conter informações sensíveis, não estou disponibilizando o repositório nem o APK.'} />
        </>
    );
}
