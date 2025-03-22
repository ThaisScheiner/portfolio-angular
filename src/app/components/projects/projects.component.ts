  import { Component } from '@angular/core';

  @Component({
    selector: 'app-projects',
    imports: [],
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
  })
  export class ProjectsComponent {
    projects = [
      {
        title: 'Lista de tarefas',
        description: 'Aplicação de lista de tarefas (ToDo List) utilizando o Angular 19, com signals para o gerenciamento de estado reativo e integração com um backend para persistência dos dados.',
        image: 'assets/lista-tarefas.png',
        link: 'https://github.com/ThaisScheiner/lista-tarefas'
      },
      {
        title: 'API do Github',
        description: 'Requisição HTTP get com a API do Github, utilizei Angular, services para recuperar as informações do usuário do github ao fazer busca dos usuários no GitHub.',
        image: 'assets/github.png',
        link: 'https://github.com/ThaisScheiner/api-github-angular'
      },
      {
        title: 'MicroFrontEnd com Module Federation do Webpack',
        description: 'Neste exemplo, o microfrontend na página Home atua como o host, os links Dashboard Barra e Dashboard Pizza são aplicações independentes.',
        image: 'assets/mfe.png',
        link: 'https://github.com/ThaisScheiner/microfront-end-exemplo'
      }
    ];      
  }
