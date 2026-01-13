# 🍔 Make Your Burger — Fullstack (NestJS + Prisma + Vue.js)

O **Make Your Burger** é uma aplicação **Fullstack** para montagem e gerenciamento de pedidos de hambúrgueres.  
O projeto foi evoluído de uma aplicação estática para um ecossistema completo com **backend real**, **banco de dados** e **frontend reativo**, utilizando tecnologias modernas do mercado.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend
- **NestJS** — Framework Node.js para construção de APIs escaláveis e modulares
- **Prisma ORM** — ORM moderno para comunicação com o banco de dados
- **SQLite** — Banco de dados relacional leve (arquivo `dev.db`)
- **TypeScript** — Tipagem estática para maior segurança e produtividade

### 🎨 Frontend
- **Vue.js 3** — Framework progressivo para construção da interface do usuário
- **Fetch API** — Comunicação assíncrona com o backend

---

## 🛠️ Funcionalidades Implementadas

### 📦 Gestão de Ingredientes
- Busca dinâmica de **pães**, **carnes** e **opcionais** diretamente do banco de dados
- Dados consumidos via API REST

### 🧾 Fluxo de Pedidos (CRUD)
- **Criação**
  - Formulário reativo
  - Validação visual
  - Limpeza automática dos campos após envio
- **Listagem**
  - Dashboard com pedidos em tempo real
- **Atualização**
  - Alteração de status do pedido:
    - Solicitado
    - Em Produção
    - Finalizado
- **Exclusão**
  - Cancelamento de pedidos
  - Atualização imediata da interface

### 🌱 Seed do Banco de Dados
- Script automatizado para popular:
  - Ingredientes
  - Status iniciais dos pedidos

---

## 🔧 Configuração do Ambiente

### 1️⃣ Instalação das Dependências

Dentro da pasta `backend`, execute:

```bash
npm install

```

## 2️⃣ Configuração do Banco de Dados
Gere o Prisma Client e execute as migrations
```bash
npx prisma migrate dev --name init
```

## 3️⃣ Popular o Banco de Dados (Obrigatório)

Para que o frontend consiga exibir os ingredientes:
```bash
npx prisma db seed
``` 

## Como Rodar o Projeto
### ▶️ Iniciar o Backend
```bash
npm run start:dev
```
A API estará disponível em:

```bash
http://localhost:3000
```

### ▶️ Iniciar o Frontend
No diretório do projeto Vue.js (frontend), execute:
```bash
npm run serve
```
## Endpoints da API

| Método | Rota            | Descrição                                  |
| -----: | --------------- | ------------------------------------------ |
|    GET | `/ingredientes` | Retorna os ingredientes por categoria      |
|    GET | `/status`       | Retorna os status disponíveis para pedidos |
|    GET | `/burgers`      | Lista todos os pedidos                     |
|   POST | `/burgers`      | Cria um novo pedido                        |
|  PATCH | `/burgers/:id`  | Atualiza o status de um pedido             |
| DELETE | `/burgers/:id`  | Remove um pedido do sistema                |



