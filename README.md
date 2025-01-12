# Angular Crud Clientes

Este projeto foi desenvolvido utilizando Angular na versão 19.0.6. Trata-se de um site que realiza gerenciamento de clientes. Nele possui as funções de Cadastrar Clientes(CREATE), Listar Clientes(READ), Editar Clientes(UPDATE) e Deletar Cliente (DELETE) 
  
## 📍Stack utilizada

<div> 
  
  <img align="inline_block" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img align="inline_block" alt="saas" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
  <img align="inline_block" alt="angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img align="inline_block" alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img align="inline_block" alt="MySQL" src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
  <img align="inline_block" alt="Spring" src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"/>
  <img align="inline_block" alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
</div>

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── header/
│   ├── models/
│   │   └── Cliente.ts/
│   │   ├── page/
│   │   │   ├── cadastrar-clientes/
│   │   │   ├── deletar-clientes/
│   │   │   ├── editar-clientes/
│   │   │   └── listar-clientes/
│   │   └── services/
│   │   │   └── cliente.service.ts
│   └── ... (demais diretórios e arquivos)
├── assets/
└── ... (demais diretórios e arquivos)
```

##  📋 Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu ambiente:

- Node.js (versão 18.x ou superior)
- npm (geralmente instalado junto com o Node.js)
- Angular CLI versão 19 (ferramenta do Angular para criar componentes, classes e etc.)

## 🔧 Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local.
### 1. Clone o repositório

Clone este repositório usando o comando:

```bash
git clone https://github.com/Marcellyz/angular-crud-clientes.git
```
### 2. Navegue até o diretório do projeto

```bash
cd angular-crud-clientes
````

### 3. Instale as dependências

Use o npm para instalar as dependências necessárias:

```bash
npm install
````

### 4. Iniciar a aplicação localmente

Para rodar a aplicação localmente em um servidor de desenvolvimento, execute:

```bash
ng serve
````
Abra o navegador e acesse http://localhost:4200/ (o porto pode variar). A aplicação será recarregada automaticamente sempre que houver mudanças nos arquivos do projeto.

## ⚙️ Build

Para criar uma versão de produção otimizada do projeto, use o comando:

```bash
ng build
````
Os arquivos gerados estarão no diretório dist/. Você pode usar esses arquivos para hospedar a aplicação em um servidor web.

## 🚀 API 
Para clonar, configurar e executar a API.Certifique-se de ter os pré-requisitos instalados e configurados antes de começar.

### Pré-requisitos da API

- Java JDK (versão 17.x)
- Maven
- Git
- IDE de sua escolha(Eclipse, IntelliJ IDEA ou VS Code) 
- Banco de Dados(MySQL)

### Passo a Passo

1️⃣ Baixar o arquivo API
Esse arquivo está na pasta Backend, presente nesse repositorio, entre na pasta e recorte o diretório com nome API e adicione na sua pasta de preferência.

2️⃣ Configure o Arquivo `application.properties`
No diretório `src/main/resources`, localize o arquivo `application.properties`. Configure as propriedades do banco de dados e outras variáveis de ambiente, como:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/nome_do_banco
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
```

- Substitua `nome_do_banco`,`seu_usuario` e `sua_senha` pelas suas credenciais,
- Em seguida, certifique-se de que o banco esteja rodando;

3️⃣ Compile o Projeto com o Maven

No terminal, compile o projeto para garantir que todas as dependências estejam instaladas corretamente:

```bash
mvn clean install
```

4️⃣ Execute a aplicação

Por ultimo execute a aplicação e verefique se ela funciona sem erros.


## 🔮 Futuras Melhorias

| **Área**             | **Descrição**                                                                 |
|----------------------|------------------------------------------------------------------------------|                    
| **📊 Paginação**  | Adicionar suporte à paginação para evitar a exibição de grandes volumes de dados em uma única página                     |
| **🙍‍♀️ Feadback ao Usuario**    |  Usar `MatSnackBar` para exibir notificações de sucesso ou erro após as ações do usuário.               |
| **🔍 Buscar pelo Nome do Cliente** | Adicionar um  input para pesquisar utilizando o nome do cliente. |
| **✅ Validações Avançadas** | Verificar se o nome do cliente já existe antes de permitir o cadastro. |

## 🖇️ Contribuição ❤️💡📝🤩

Contribuições são bem-vindas!❤️💡

Esse README pode ser ajustado de acordo com as necessidades específicas do seu projeto.

---
⌨️ com ❤️ por [Marcellyz](https://github.com/Marcellyz) 😊
