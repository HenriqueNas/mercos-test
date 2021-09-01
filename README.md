# Esse repositório é para um teste da mercos.com

Um simples projeto de controle de entrada e saída financeiro

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

Agora é só realizar as migrations no backend, erodar o projeto em dois terminais separado

```bash
cd backend
yarn typeorm migration:run
yarn run dev:server

cd ..
cd frontend
yarn run start
```