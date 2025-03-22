# Portfólio - Thais Scheiner

Este repositório contém o código-fonte do meu portfólio profissional, desenvolvido com **Angular** e outras tecnologias modernas para apresentar minhas habilidades, projetos e formas de contato.

## 🚀 Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### **Frontend:**
- **Angular 19** - Framework principal para desenvolvimento da aplicação.
- **TypeScript** - Superset do JavaScript utilizado para tipagem estática.
- **Tailwind CSS** - Framework para estilização e responsividade.
- **NgRx** - Gerenciamento de estado reativo.

### **Backend:**
- **Node.js** - Runtime para JavaScript no backend.
- **Express.js** - Framework minimalista para criação de API.
- **dotenv** - Gerenciamento de variáveis de ambiente.
- **Nodemailer** - Utilizado para envio de emails via Gmail.

## 📌 Funcionalidades
- Página inicial apresentando informações sobre minha trajetória profissional.
- Seção de projetos com imagens e links para repositórios.
- Página de habilidades destacando as tecnologias que domino.
- Página "Sobre Mim" com detalhes sobre minha formação e experiência.
- Página de contato com formulário para envio de mensagens direto para meu email.
- **Envio de email via Gmail** na página de contato, utilizando Nodemailer.

## 🛠️ Como Rodar o Projeto
### ** 1 Clonar o Repositório**
```sh
git clone https://github.com/ThaisScheiner/portfolio-angular.git
cd portfolio-angular
```

### ** 2 Instalar Dependências**
```sh
npm install
```

### ** 3 Configurar Variáveis de Ambiente**
Criar um arquivo `.env` dentro da pasta `backend/` com o seguinte conteúdo:
```env
EMAIL_USER=meuemail@gmail.com
EMAIL_PASS=minhasenha
```

### ** 4 Rodar o Backend**
```sh
cd backend
node server.js
```

### ** 5 Rodar o Frontend**
```sh
ng serve
```
Acesse no navegador: `http://localhost:4200`

