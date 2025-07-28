# API de Agricultores – NestJS + MongoDB

Uma API construída com **NestJS**, **MongoDB**, **Mongoose** e **TypeScript** para gerenciamento de agricultores.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-validator](https://github.com/typestack/class-validator)

## Link da API em Produção
# https://agricultors-nest-mongodb.onrender.com

## .env
DB_CONNECTION_STRING=SUA CONNECTION STR (mongodb://localhost:27017/yourDB será por default caso não atribua um valor)

## Instalação

```bash
# Clone o repositório
git clone git@github.com:luizinfected/agricultors-nest-mongodb.git
cd agricultors-nest-mongodb

# Instale as dependências
npm install

# Inicie o servidor em modo desenvolvimento
npm run start:dev
```

## Documentação da API

A documentação interativa pode ser acessada via Swagger UI:

```
http://localhost:3003/api
```

## Endpoints

### GET /agricultors?page=1&limit=10
Parâmetros:
page: página dos resultados, por padrão será 1
limit: limite de resultados, por padrão será 10
Retorna todos os agricultores cadastrados.

---

### GET /agricultors/:id

Retorna os dados de um agricultor específico com base no ID.

---

### POST /agricultors

Cria um novo agricultor.

**Exemplo de corpo:**

```json
{
  "fullName": "Luiz Costa",
  "cpf": "2222222222",
  "birthDate": "2002-11-08T00:00:00.000Z",
  "phone": "11999999999",
  "active": true
}
```

**Regras:**

- Não é permitido cadastrar dois agricultores com o mesmo CPF (único).

---

### PATCH /agricultors/:id

Atualiza os dados de um agricultor existente.

**Exemplo de corpo:**

```json
{
  "phone": "11999999999",
  "active": true
}
```

**Regras:**

- O CPF não pode ser alterado após o cadastro.

---

### DELETE /agricultors/:id

Remove um agricultor pelo ID.

**Regras:**

- Não é permitido remover um agricultor que está ativo (`active: true`).

---

## Regras de Negócio

- O **CPF é único** e não pode ser duplicado.
- O **CPF é imutável** após o cadastro.
- Um agricultor **ativo não pode ser removido**.

## Autor

**Luiz Enrique**  
[GitHub](https://github.com/luizinfected)
