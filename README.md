# devwebii-express-mongo
### Projeto da matéria de web II usando docker, express e mongo/mongoose

#### Para executar o projeto localmente:
1. Adicione um arquivo **.env** na raiz do projeto com a url da instância do mongo:
```bash
DATABASE_CONNECTION_STRING="mongodb://admindevwebii:admin@127.0.0.1:27017/devwebii?retryWrites=true&w=majority"
```
2. Utilizando o terminal/cmd inicie a api utilizando os comandos **npm run dev/prod**. 

#### Utilizando uma instância do mongo no docker:
1. Especifique a flag **--network="host"** caso o container tenha sido iniciado via **docker run** ou basta descomentar a linha 19 do arquivo **docker-compose.yml** (removendo o #).
2. Utilizando o terminal/cmd inicie o serviço do mongo:
```bash
docker run --rm --network="host" -e MONGO_INITDB_DATABASE="devwebii" \
-v ./data:/data/db -v ./mongo_init:/docker-entrypoint-initdb.d \
--name nomeDoServicoMongo -p 27017:27107 mongo:latest
# ou
docker-compose up -d mongo
```
 3. E execute a api utilizando os comandos **npm run dev/prod**. 

#### Para executar o projeto (api & mongo) no docker:
```bash
docker build -t -t devwebii_api:1.0 && docker-compose up -d
```
#### Para atulizar a imagem da api:
```bash
docker build -t -t devwebii_api:versao .
```
