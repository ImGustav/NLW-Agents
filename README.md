# NLW Agents - Minha Jornada com IA

Este é o repositório do projeto que desenvolvi durante a trilha de Node.js do evento **NLW Agents** da **Rocketseat**. Foi uma semana intensa de muito código, aprendizado e desafios, onde construí uma API do zero com tecnologias modernas do ecossistema Node.js.

## 🚀 O que eu aprendi e utilizei

Neste projeto, tive a oportunidade de aprender e aplicar um conjunto de ferramentas incríveis. A stack utilizada foi:

-   **Node.js com TypeScript nativo:** Explorei o uso do `–experimental-strip-types` para rodar TypeScript sem a necessidade de um passo de build, o que agilizou muito o desenvolvimento.
-   **Fastify:** Usei esse framework web pela sua fama de ser extremamente rápido e com baixo overhead. Gostei bastante da sua simplicidade e performance.
-   **PostgreSQL com pgvector:** O mais legal! Aprendi a trabalhar com a extensão `pgvector` para armazenar e consultar vetores, a base para muitas aplicações de IA.
-   **Drizzle ORM:** Minha primeira vez com um ORM "type-safe". A experiência de ter o autocomplete e a segurança do TypeScript ao interagir com o banco de dados foi sensacional.
-   **Zod:** Para garantir que os dados que entram na minha API estão corretos, usei o Zod para validar os schemas de forma declarativa e segura.
-   **Docker:** Para não ter dor de cabeça com a instalação do banco de dados, subi o PostgreSQL com Docker, o que tornou o ambiente de desenvolvimento muito mais consistente.
-   **Biome:** Conheci o Biome para manter o código limpo e formatado, uma ferramenta nova e muito promissora.

## 🏗️ Como estruturei o projeto

Seguindo as boas práticas ensinadas no evento, organizei a arquitetura do projeto de forma modular. Meu foco foi em:

-   **Separar as responsabilidades:** Criei pastas para as rotas, os schemas de validação e a lógica de banco de dados, deixando tudo mais fácil de encontrar e dar manutenção.
-   **Garantir a segurança dos tipos:** A combinação do Zod com o Drizzle ORM resultou em uma aplicação robusta, onde os tipos são validados desde a requisição HTTP até a inserção no banco.
-   **Centralizar as variáveis de ambiente:** Aprendi a importância de validar as variáveis de ambiente para evitar erros quando o projeto for para produção.

## ⚙️ Meu Guia de Setup (Como eu rodei o projeto)

Estes foram os passos que segui para configurar e rodar a aplicação na minha máquina.

### Pré-requisitos

-   Ter o Node.js instalado (usei uma versão que suporta a flag `--experimental-strip-types`).
-   Ter o Docker e o Docker Compose funcionando.

### 1. Clonando o repositório

```bash
git clone <url-do-seu-repositorio>
cd server
```

### 2. Subindo o banco de dados com Docker

```bash
docker-compose up -d
```

*Esse comando sobe um container com o PostgreSQL e a extensão `pgvector` já prontos para uso.*

### 3. Configurando minhas variáveis de ambiente

Precisei criar um arquivo `.env` na pasta raiz do projeto com o seguinte conteúdo:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Instalando as dependências

```bash
npm install
```

### 5. Rodando as migrações do banco

Este comando cria as tabelas no banco de dados com base no que foi definido com o Drizzle.

```bash
npx drizzle-kit migrate
```

### 6. Populando o banco para testes

Para ter alguns dados para testar a aplicação, rodei o script de "seed".

```bash
npm run db:seed
```

### 7. Rodando a aplicação

**Para desenvolver e ver as alterações em tempo real:**

```bash
npm run dev
```

**Para rodar em modo "produção":**

```bash
npm start
```

## 📚 Scripts que utilizei

-   `npm run dev` - Inicia o servidor com hot reload. Foi o que mais usei durante o desenvolvimento.
-   `npm start` - Roda a versão final da aplicação.
-   `npm run db:seed` - Um script para popular o banco com dados de exemplo, super útil para testar os endpoints.

## 🌐 Endpoints que criei

A API pode ser acessada em `http://localhost:3333`

-   `GET /health` - Um endpoint de health check para verificar se a aplicação está no ar.
-   `GET /rooms` - Lista as salas que foram cadastradas no banco.

---

Feito com muito ❤️ e café durante o NLW da Rocketseat! 🚀