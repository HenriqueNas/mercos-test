# Esse repositório é para um teste da mercos.com

Um simples projeto de controle de entrada e saída financeiro.

Codei em typescript, utilizando React para o frontend, e no backend NodeJs (v14.17.5) com express e typeorm.

## Banco de Dados

É preciso (saber viver) uma database postgres para rodar o backend
Aconselho usar docker para subir
Acesse esse link para saber como instalar [docker](https://docs.docker.com/engine/install/).

Antes de tudo baixe a imagem postgres do docker
```bash
docker pull postgres
```

Depois suba um container com as seguintes configurações
```bash
sudo docker run --name mercos -e POSTGRES_PASSWORD=psql -e POSTGRES_USER=postgres -e POSTGRES_DB=mercos -d -p 5432:5432 postgres
```

## Instalação

Lembre-se, diferentes versões de node podem dar problema, certifique-se de usar a versão v14.17.5.
```bash
nvm install 14.17.5

nvm use v14.17.5
```

Agora é só instalar as dependencias.
Entre nos diretórios 'frontend' e 'backend', instale usando teu gerenciador de pacote.

```bash
cd frontend
yarn install

cd ..
cd backend
yarn install
```

## Iniciando

Antes de iniciar, realize as migrations no backend, depois rode os projetos em dois terminais separados.

```bash
cd backend
yarn typeorm migration:run
yarn run dev:server

cd ..
cd frontend
yarn run start
```
