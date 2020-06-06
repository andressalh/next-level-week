
<p align="center">
  <img width="200" height="80" src="https://github.com/andressalh/next-level-week/blob/master/rockset/web/src/assets/logo.svg">
</p>

# Index

- [Database](#database)
- [Back-end](#back-end)
- [Front-end](#front-end)
- [Front-end](#mobile)

<a id="database"></a>
<h1>Database</h1>

Foi utilizado o <strong>SQLite3</strong> como banco de dados pois não é necessário nenhuma configuração fora do IDE.

<h2>Dependências: </h2>

- sqlite3
- knex

<h3>sqlite3</h3>
  
Instalação do pacote <strong>sqlite3</strong> na aplicação.

- Instalação: 

```
npm install sqlite3
```
  
<h3>knex</h3>
  
O <strong>knex</strong> permite escrever comandos sql com sintaxe do <strong>JavaScript</strong>.

- Instalação:

```
npm install knex
```

- Configurar o script para rodar o comando de uma forma mais fácil no ```package.json```.

```
"knex:migrate": "npx knex --knexfile knexfile.ts migrate:latest"
```

- O <strong>knex</strong> fará a criação das tabelas no banco de dados, para executar utilize o comando 

```
npm run knex:migrate
```

- Configuração do seeds para popular as tabelas do banco de dados no ```package.json```, acrescente: 

```
"knex:migrate": "npx knex --knexfile knexfile.ts migrate:latest"
"knex:seed": " npx knex —knexfile knexfile.ts seed:run" 
```

- Para executar as seeds execute o comando 

```
npm run knex:seed
```

<a id="back-end"></a>
<h1>Back end</h1>

<h2>Dependências: </h2>

- typescript
- express | @types/express
- ts-node
- ts-node-dev
- cors | @types/cors

<h3>Comandos iniciais</h3>

```
npm init -y
```

<h3>Typescript</h3>

Para utilizar o <strong> Typescript </strong> é necessário instalar a dependência.

- Instalação:

```
npm install typescript -D
```

- Após a instalação utilize o comando para criar o file.

```
npx tsc --init
```

<h3>Express</h3>

O Express é responsável pelo roteamento do servidor, é necessário instalação do pacote padrão e o @types para ser utilizado junto com o Typescrips.
 
- Instalação do express

```
npm install express
npm install @types/express -D
```

<h3>ts-node</h3>

O <strong>ts-node</strong> permite que o node compile arquivos <strong>typescript</strong> pois como padrão o Node executa somente o <strong>JavaScript</strong>.
 
- Instalação:

```
npx ts-node src/server.ts
```

<h3>ts-node-dev</h3>

O <strong>ts-node-dev</strong> faz o monitoramento da pasta configurada, com isso não precisamos executar sempre o comando  <strong>npx ts-node-dev src/server.ts</strong> quando tiver alguma alteração no código.
 
- Instalação:

```
npm install ts-node-dev -D
```

- Após a instalação anterior da dependência, configurar dentro do ```package.json```, adicionar essas linhas de comando. O ```--ignore-watch node_modules``` ignora o node_modules em cada verificação, pois o node_modules não constuma ser alterado. Com isso, as altualizações são executadas mais rapidamente.

```
"scripts": {
"dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
}
```

Após essa configuração, podemos executar o comando, com isso sempre que tiver alguma alteração no código, o <strong>ts-node-dev</strong> irá fazer a atualização automática.

```
npm run dev
```

<h3>cors</h3>

O Cors permite que outras urls acessem nossa API, para utilizado é necessário instalar o pacote padrão e o @types.  

```npm install cors
npm install @types/cors
```

<a id="front-end"></a>
<h1>Front end</h1>

<h2>Dependências: </h2>

- axios
- react-router-dom | @types/react-router-dom
- react-icons
- leaflet | react-leaflet | @types/leaflet


<h3>Criar o template React </h3>

Para começar a parte front end, executar o react app utilizando o template typescript.

 ```
 npx create-react-app nomedapasta --template=typescript
 ```

<h3>Axios</h3>

Axios é utilizado para fazer requisições HTTP.

- Instalação:

```
npm install axios
```

<h3>React Router DOM</h3>

O React Router DOM será responsável pelo roteamento da aplicação web. 

- Instalação:
```
npm install react-router-dom
npm install @types/react-router-dom -D
```
<h3>react-icons</h3>

O react-icons permite usar icons nas aplicações.

- Instalação:

 ```npm install react-icons```
 
- Para utiliza-los

 ```
 // Importação
  import { FiCheckCircle } from 'react-icons/fi'

// Component
  <FiCheckCircle" />
```


<h3>Leaflet</h3>

Para a utilização do mapa na nossa aplicação, foi utilizado a api open source <strong>Leaflet</strong>.

- Instalação:

```npm install leaflet react-leaflet
npm install @types/react-leaflet -D
```



<a id="mobile"></a>
<h1>Mobile</h1>

- Em construção
