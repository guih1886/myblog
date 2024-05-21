import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import targetSumAPK from '../Assets/APK/targetSum.apk';
import bakesaleAPK from '../Assets/APK/bakesale.apk';
import flappy from '../Assets/Images/flappy.png';
import qrCode from '../Assets/Images/geradorQrCode.png'
import crudAngular from '../Assets/Images/crudAngular.png';
import crudReact from '../Assets/Images/crudReact2.png';
import calculadoraReact from '../Assets/Images/calculadoraReact.png'
import backsale from '../Assets/Images/backsale.png';
import targetSum from '../Assets/Images/targetSum.jpeg';
import aluroni from '../Assets/Images/projeto_aluroni.jpg'
import computer from '../Assets/Images/computer.png'
import aluraSpace from '../Assets/Images/alura-space.png'
import carteiradejogos from '../Assets/Images/carteiradejogos.png'
import vollmed from '../Assets/Images/vollmed.png'

export default function ProjectList() {
    return (
        <>
            <ProjectItem media={carteiradejogos} mediaWidth={'40%'} disableLink={true} disableLinkGit={false} title='Carteira de jogos API' description='O projeto "Carteira de Jogos API" é uma aplicação que permite a gestão completa de jogos e usuários, oferecendo funcionalidades de criação, consulta, atualização e exclusão (CRUD). A API facilita o cadastro de jogos e usuários, onde os jogos adicionados são automaticamente vinculados à lista de jogos do usuário. Também permite que os jogos sejam adicionados à lista de favoritos do usuário, passando por diversas validações, como a verificação do usuário que está adicionando aos favoritos, verifica a duplicidade na lista de favoritos e se o jogo está realmente na lista de jogos do usuário.

A API também proporciona a gestão dos jogos no sentido de permitir a ativação e inativação. Remover um jogo da lista de jogos do usuário não o exclui permanentemente, apenas o marca como inativo, possibilitando sua reativação futura. Em termos de segurança, o uso da API requer autenticação, que é realizada através de login com email e senha cadastrados. O sistema implementa autenticação baseada em JSON Web Tokens (JWT), assegurando que somente usuários autenticados possam acessar e manipular os dados. Foi desenvolvido com .NET, ASP.NET e SQL Server.' linkGit={'https://github.com/guih1886/carteiradejogos'} />
            <ProjectItem media={vollmed} mediaWidth={'40%'} disableLink={true} disableLinkGit={false} title='Vollmed API' description='Vollmed é uma API de uma aplicação mobile de uma clínica médica. Foi desenvolvido com Java, Spring e MySQL' linkGit={'https://github.com/guih1886/vollmedAPI'} />
            <ProjectItem media={computer} disableLink={false} disableLinkGit={false} title='Computer Project' route='https://guih1886.github.io/computers-project/' description='Projeto de um e-commerce de uma loja de produtos eletrônicos desenvolvido em Angular. Nesse projeto podemos detalhar um produto, adicionar uma quantidade do produto no carrinho, filtrar os produtos pela descrição, excluir ou alterar a quantidade do produto no carrinho, confirmar a compra dos produtos no carrinho, enviar uma mensagem de contato' linkGit={'https://github.com/guih1886/computers-project'} />
            <ProjectItem media={aluroni} disableLink={false} disableLinkGit={false} title='Aluroni' route='https://guih1886.github.io/projeto-aluroni/' description='Aluroni é um projeto de cardápio de restaurante desenvolvido com React e escrito em typescript, utilizando SCSS para estilização. Nesse projeto podemos executar a buscar por título, filtrar por categoria dos pratos e ordenar por preço, porção ou serving.' linkGit={'https://github.com/guih1886/projeto-aluroni'} />
            <ProjectItem media={aluraSpace} disableLink={true} disableLinkGit={false} title='Alura Space' route='https://github.com/guih1886/alura-space' description='O projeto do Alura Space é um CRUD de cadastro para imagens do espaço como estrelas, galáxias, nebulosas e planetas. Foi desenvolvido com django (python) e CSS.' linkGit={'https://github.com/guih1886/alura-space'} />
            <ProjectItem media={crudReact} disableLink={false} disableLinkGit={false} title='CRUD React' route='https://guih1886.github.io/CrudReact/' description='Projeto de cadastros CRUD simples desenvolvido em React e CSS. O sistema utliza o localStorage do navegador como banco de dados provisório, porém no desenvolvimento foi utilizado JSON Server.' linkGit={'https://github.com/guih1886/CrudReact'} />
            <ProjectItem media={crudAngular} disableLink={false} disableLinkGit={false} title='CRUD Angular' route='https://guih1886.github.io/desafio-angular/' description='Projeto de cadastros CRUD em que é possível incluir, alterar e excluir o cadastro de alunos. O sistema faz o calculo automático da situação do aluno e da média, desenvolvido em Angular e LESS.' linkGit={'https://github.com/guih1886/desafio-angular'} />
            <ProjectItem media={flappy} disableLink={false} disableLinkGit={false} title="Flappy Bird" route='https://guih1886.github.io/Flappy-bird/' description={'Projeto flappy bird desenvolvido em CSS e JavaScript, o qual é uma réplica do jogo que ficou famoso em 2013.'} linkGit={'https://github.com/guih1886/Flappy-bird/tree/main/docs'} />
            <ProjectItem media={calculadoraReact} disableLink={false} disableLinkGit={false} title='Calculadora' route='https://guih1886.github.io/Projeto_CalculadoraReact/' description='Nesse projeto desenvolvi essa calculadora o qual é possível realizar contas simples, assim como a calculadora que encontramos nativamente nos SOs.' linkGit={'https://github.com/guih1886/Projeto_CalculadoraReact'} />
            <ProjectItem media={qrCode} disableLink={false} disableLinkGit={false} title="Gerador QR Code" route='https://guih1886.github.io/GeradorQRCode/' description={'Nesse projeto é possível gerar um QR Code que pode ser lido e redirecionado por qualquer dispositivo.'} linkGit={'https://github.com/guih1886/GeradorQRCode'} />
            <ProjectItem media={backsale} mediaWidth={'30%'} titleLinkButton={'Download APK'} disableLink={false} disableLinkGit={false} title="Backsale" description={'Projeto backsale é um aplicativo fictício de vendas de cursos em benefício de instituições filantrópicas. Desenvolvido para Android em React Native.'} route={bakesaleAPK} linkGit="https://github.com/guih1886/Projetos/tree/main/Android/Bakesale" />
            <ProjectItem media={targetSum} mediaWidth={'30%'} titleLinkButton={'Download APK'} disableLink={false} disableLinkGit={false} title="Target Sum" description={'Projeto do target sum é um jogo simples, aonde é mostrado um valor alvo e o usuário deve selecionar os 4 valores que resultem na soma do desse valor, foi desenvolvido em React Native.'} route={targetSumAPK} linkGit="https://github.com/guih1886/Projetos/tree/main/Android/TargetSum" /> </>
    );
}
