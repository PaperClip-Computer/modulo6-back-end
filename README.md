<h1 align="center">
     Módulo 6: gestão de saúde avançada
</h1>

<h4 align="center">
	🚧 Em progresso 🚧
</h4>

# Tabela de conteúdos

- [Sobre o projeto](#Sobre-o-projeto)
- [Como executar o projeto](#Como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Rodando o projeto](#rodando-o-projeto)
- [Tecnologias](#-tecnologias)
- [Autor](#autor)
- [Licença](#licença)

## 💻 Sobre o projeto

Sistema para gestão de saúde avançada pensada para utilização de clientes de
médicos especializados em endocrinologia.

---

## 🚀 Como executar o projeto

### Pré-requisitos

- [Docker](https://docs.docker.com/engine/install/)

### 🎲 Rodando o projeto em desenvolvimento

```bash
# Clone este repositório
$ git clone git@github.com:PaperClip-Computer/modulo6-back-end.git

# Rode o projeto
$ docker compose up -d
```

## 🚀 Como executar o projeto em desenvolvimento

### Pré-requisitos

- [Git](https://git-scm.com/downloads)
- [Node Js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

> pode-se utilizar do postgreSQL sobre [Docker](https://docs.docker.com/engine/install/) com [docker-compose](https://docs.docker.com/compose/install/) já disponibilizado pelo projeto

### 🎲 Rodando o projeto

```bash

# Clone este repositório
$ git clone git@github.com:PaperClip-Computer/modulo6-back-end.git

# Acesse a pasta src do projeto
$ cd modulo6-back-end/src

# Rode o banco de dados, caso esteja com docker
$ docker compose up -d

# Crie o arquivo env com as secrets do projeto seguindo o exemplo
$ cp .env.example .env

# Instale as dependências
$ npm install

# Rode as migrations
$ npm run migrate

# Execute a aplicação
$ npm run dev

```

---

## 🛠 Tecnologias

A utilização do nodejs aliado com framework [Adonis Js](https://adonisjs.com/)
tem como objetivo partir para uma estrutura mais opinada a respeito da construção
de APIs REST além de simplificação não tendo que ficar repensando o básico do qual
através da normalização provida por tal, reduz tempo de desenvolvimento do essencial
para qualquer projeto moderno.

Além disto, a utilização do [Typescript](https://www.typescriptlang.org/) vem para
trazer robustez ao projeto, pois através dos tipos, temos a segurança de não se
preocupar com o tipo de dados que estamos utilizando uma vez que são explícitos.
além de auxiliar na documentação do próprio projeto, visto que tudo está especificado
no próprio código.

---

## 🦸 Autors

<div style="display: flex; justify-content: space-around;">
<div style="display: inline">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/52057913?s=400&u=222dffcab5586f0eb4efcbff06caa868450f6b8a&v=4" width="100px;" alt=""/>
 <br />
 <a><sub><b>Ellian Aragão Dias</b></sub></a>
 <br />
 
[![Linkedin Badge](https://img.shields.io/badge/-Ellian_Aragao_Dias-blue?style=flat-square&logo=Linkedin&logoColor=white&link=linkedin.com/in/ellian-aragao-dias)](linkedin.com/in/ellian-aragao-dias)
[![Gmail Badge](https://img.shields.io/badge/-ellian.aragao@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ellian.aragao@gmail.com)](mailto:ellian.aragao@gmail.com)

</div>
<div style="display: inline">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/48692606?s=400&u=e33afc067300f2e29cc7209c954fd927a3be8cab&v=4" width="100px;" alt=""/>
 <br />
 <a><sub><b>Gustavo Cunha Lacerda</b></sub></a>
 <br />
 
[![Linkedin Badge](https://img.shields.io/badge/-Gustavo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=linkedin.com/in/gustavocunhalacerda/)](https://www.linkedin.com/in/gustavocunhalacerda/)
[![Gmail Badge](https://img.shields.io/badge/-gustavocunhalacerda@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gustavocunhalacerda@gmail.com)](mailto:gustavocunhalacerda@gmail.com)
</div>
</div>

---

## 📝 Licença

Este projeto esta sobre a licença [MIT](./LICENSE).

Feito por Ellian Aragão Dias e Gustavo Cunha Lacerda 👋🏽

---
