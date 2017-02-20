# Curso Angular 2 – Aula 10: Acesso HTTP a um servidor remoto

### O objetivo da aula 10 é ensinar como configurar e realizar acessos HTTP a servidores remotos no Angular 2.

> Ao término dessa aula você entenderá como configurar e implementar acessos HTTP a servidores remotos no Angular 2.

- Definição
- Criando uma API RestFul com o LoopBack / StrongLoop
- Criando um serviço utilitário para acesso HTTP
- Configurando o módulo HTTP na aplicação
- Implementando a tela de login
- Implementando o serviço de acesso HTTP dos alunos
- Implementando a tela de listagem de alunos
- Implementando a tela de cadastro de alunos
- Implementando a tela de Edição de alunos
- Implementando a tela de visualização de alunos


### 1. Definição

O Angular 2 é um framework front-end, e a menos que você crie uma aplicação que possa manter os dados todos localmente no navegador, você certamente precisará acessar um servidor remoto utilizando conexões HTTP para isso.

O Angular 2 possui um módulo específico para os principais acessos HTTP tornando nossas vidas bem mais simples.

Para a aula de hoje também criaremos nosso próprio servidor web em NodeJS, utilizando o framework LoopBack / StrongLoop, permitindo um aprendizado por completo em relação a implementação e comunicação entre back-end e front-end.

### 2. Criando uma API RestFul com o LoopBack / StrongLoop

O LoopBack é um framework altamente extensível e open source criado para o NodeJS.

Tamanho sucesso fez com que a IBM e o StrongLoop o adquirissem para mantê-lo e ajudá-lo com melhorias e implementação de novos recursos.

A escolha do LoopBack / StrongLoop para essa aula é devido ao fato da facilidade de implementação, e como você na sequência, é possível criar uma API RestFul completa com um esforço mínimo, além de utilizar o NodeJS, fazendo com que focamos em implementações JavaScript.

Para começar a criação da nossa API RestFul de gerenciamento de alunos, devemos instalar o pacote NPM do LoopBack / StrongLoop, conforme comando a seguir:

`npm install -g strongloop`

Caso você receba alguma mensagem de erro referente a permissão de acesso, execute o comando a seguir como administrador do sistema. Em sistemas Unix ficaria assim:

`sudo npm install -g strongloop`

Após a instalação do LoopBack / StrongLoop, devemos criar nossa API RestFul, que será responsável por gerenciar nosso cadastro de alunos estudado na aula anterior.

Para isso ainda no console, navegue até o diretório onde deseja criar o projeto e execute o seguinte comando:

`slc loopback`

Um assistente de criação de projeto será executado, entre com as seguintes informações no assistente:

```
Pergunta	         | Resposta
Nome da aplicação	 | api-aluno
Nome do diretório	 | api-aluno
Tipo de aplicação	 | api server (primeira opção exibida)
Versão do LoopBack | 3.x

```

Aguarde a criação dos arquivos do projeto e pronto, já temos uma API RestFul completa para uso!

Para executar a aplicação acesse o diretório da api e execute o comando abaixo:

```
cd api-alunos
node .
```

Acesse a url http://0.0.0.0:3000/explorer para visualizar uma interface que contém toda a documentação de nossa API Restful, que até agora inclui as instruções para gerenciar usuários (Users) utilizados para autenticação em nossa API.

Com o servidor configurado e funcionando, vamos agora criar a API de gerenciamento de alunos, para isso execute no console com o servidor parado (Ctrl + C no console):

`slc loopback:model`

Entre com as seguintes informações no assistente que será exibido:

```
Pergunta	                | Resposta
Nome do model	            | aluno
Data source	              | db (memory)
Classe base	              | PersistedModel
Expor via Rest API	      | Sim (Y)
Nome no plural	          | alunos
Modo comum ou servidor	  | Comum (common)
Nome do primeiro atributo	| id
Tipo do atributo Numérico | (number)
Obrigatório	              | Sim (Y)
Valor padrão	            | Deixar em branco
Nome do segundo atributo	| nome
Tipo do atributo	        | Texto (string)
Obrigatório	              | Sim (Y)
Valor padrão	            | Deixar em branco
Nome do terceiro atributo	| email
Tipo do atributo	        | Texto (string)
Obrigatório	              | Sim (Y)
Valor padrão	            | Deixar em branco

Aperte ENTER para finalizar
```

Pronto, com isso no diretório ‘common/models’ foram criados dois arquivos, ‘aluno.js’ e ‘aluno.json’.

Execute o servidor novamente e explore a API criada (http://0.0.0.0:3000/explorer):

`node .`

Para finalizar nossa API RestFul, vamos agora adicionar um controle de acesso para nossas URLs. Esse controle de acesso apenas restringirá o acesso a todas as nossas APIs a usuários autenticados no sistema.

O controle de acesso será adicionado executando a seguinte instrução no console na raíz da aplicação:

`slc loopback:acl`

A seguir entre com as seguintes instruções no assistente que será exibido:

```
Pergunta	          | Resposta
Selecione o model	  | aluno
Escopo do ACL	      | Todos os métodos (All methods and properties)
Tipo de acesso      | Todos (All)
Perfil de usuário	  | Todos (All users)
Permissão de acesso | Negar para todos (Explicitly deny access)
```

Execute mais uma vez o assistente, mas agora com as seguintes instruções:

```
Pergunta	           | Resposta
Selecione o model	   | aluno
Escopo do ACL	       | Todos os métodos (All methods and properties)
Tipo de acesso	     | Todos (All)
Perfil de usuário	   | Usuários autenticados (Any authenticated user)
Permissão de acesso	 | Habilitar para todos (Explicitly grant access)
```

Devemos primeiramente negar o acesso para todos os usuários, então criar uma regra para permitir o acesso a usuários autenticados no servidor.

Seu arquivo aluno.json deve conter o seguinte conteúdo agora:

```
{
  "name": "aluno",
  "plural": "alunos",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "id": {
      "type": "number",
      "required": true
    },
    "nome": {
      "type": "string",
      "required": true
    },
    "email": {
      "type": "string",
      "required": true
    }
  },
  "validations": [],
  "relations": {},
  "acls": [
    {
      "accessType": "*",
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "DENY"
    },
    {
      "accessType": "*",
      "principalType": "ROLE",
      "principalId": "$authenticated",
      "permission": "ALLOW"
    }
  ],
  "methods": {}
}

```

Com isso terminamos a implementação da nossa API RestFul, execute a aplicação e realize alguns testes para se familiarizar com seu funcionamento.

