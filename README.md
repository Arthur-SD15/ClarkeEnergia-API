![Banner](/public/images/readme/background-readme.png)

## :warning: Aviso

A aplicação pode sofrer um **cold start** na **primeira requisição** devido à inatividade. Pode levar até 50 segundos para responder à primeira requisição, pois o back-end está hospedado no plano gratuito do Render.


## :bulb: Repositório

Neste repositório, documentarei os aspectos importantes do back-end para o desafio técnico da vaga de Desenvolvedor Júnior na Clarke Energia. Para acessar a documentação do front-end, acesse o repositório clicando [aqui](https://github.com/Arthur-SD15/ClarkeEnergia).


## :computer: Projeto

O principal objetivo deste projeto é permitir que os usuários informem seu consumo de energia sendo um número maior que 0, e com base nesse dado, encontrem os melhores fornecedores que mais se adequam às suas necessidades. O projeto conta com duas tabelas no banco de dados: uma para **usuários** e outra para **fornecedores**. Essas tabelas possuem os seguintes atributos:

```prisma
model suppliers {
  id            String  @id @default(uuid())
  name          String
  logo          String
  state         String
  costPerKwh    Float
  minKwhLimit   Float
  totalClients  Int
  averageRating Float

  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model users {
  id        String    @id @default(uuid())
  name      String?
  surname   String?
  birthDate DateTime?
  email     String    @unique
  password  String?
  googleId  String?   @unique

  createdAt DateTime @default(now())
}
```
No próximo tópico da documentação, irei detalhar as rotas e os métodos HTTP disponíveis para interação com a API, bem como suas respectivas regras de negócio.


## :left_right_arrow: Rotas/Regras de Negócios

- *Endpoint:* `/`
    - **Método**: `GET`
        - **Descrição**: Retorna uma mensagem de boas vindas, indicando que a API está funcionando corretamente.
- *Endpoint:* `/auth/login`
    - **Método**: `POST`
        - **Descrição**: Na autenticação manual, realiza a autenticação de um usuário com base no e-mail e senha fornecidos na requisição.
- *Endpoint:* `/auth/google`
    - **Método**: `GET`
        - **Descrição**: Inicia o processo de autenticação utilizando a estratégia de autenticação do Google. O usuário será redirecionado para o Google para realizar o login.
- *Endpoint:* `/auth/google/callback`
    - **Método**: `GET`
        - **Descrição**: Recebe a resposta do Google após o login e gera um token JWT para o usuário. O token gerado é então enviado como parte da URL de redirecionamento para a aplicação cliente.
- *Endpoint:* `/users`
    - **Método**: `POST`
        - **Descrição**: Cria um novo usuário, a requisição exige que sejam enviados os dados necessários para criação do usuário, onde não pode existir um usuário já cadastrado pelo email, a data de nascimento deve ser menor que tal dia e a senha deve possuir mais de 5 caracteres.
- *Endpoint:* `/users`
    - **Método**: `GET`
        - **Descrição**: Retorna uma lista de todos os usuários registrados no sistema.
- *Endpoint:* `/users/:email`
    - **Método**: `GET`
        - **Descrição**: Retorna os dados de um usuário específico, identificado pelo e-mail fornecido na URL.
- *Endpoint:* `/users/:id`
    - **Método**: `GET`
        - **Descrição**: Retorna os dados de um usuário específico, identificado pelo e-mail fornecido na URL.
- *Endpoint:* `/users/:id`
    - **Método**: `DELETE`
        - **Descrição**: Remove um usuário do sistema com base no ID fornecido na URL.
- *Endpoint:* `/suppliers`
    - **Método**: `POST`
        - **Descrição**: A requisição para criar um novo fornecedor exige que sejam enviados os dados necessários para a criação, com as seguintes validações: o nome do fornecedor não pode ser duplicado; o estado deve ser uma sigla válida de um estado brasileiro; a média de avaliação deve estar entre 1 e 5; o custo por KWh não pode ser inferior a 1; o limite mínimo de KWh não pode ser menor que 1; e o total de clientes não pode ser negativo. Caso algum desses critérios não seja atendido, será retornado um erro com a mensagem correspondente. Se todas as regras forem seguidas corretamente, o fornecedor será criado com sucesso.
- *Endpoint:* `/suppliers/by-consumption`
    - **Método**: `GET`
        - **Descrição**: Retorna os dados dos fornecedores, filtrados com base no consumo informado, onde filtra de acordo com o limite minimo de energia de cada fornecedor. A requisição exige que seja passado o parâmetro de consumption na query string. O valor de consumption deve ser maior que 0.
        - **Query**: `consumption` número de consumo de energia médio, informado pelo usuário.
- *Endpoint:* `/suppliers/:id`
    - **Método**: `GET`
        - **Descrição**: Retorna os dados de um fornecedor específico, identificado pelo id fornecido na URL.
- *Endpoint:* `/suppliers/:id`
    - **Método**: `DELETE`
        - **Descrição**: Remove um fornecedor do sistema com base no ID fornecido na URL.
- *Endpoint:* `/suppliers/:id`
    - **Método**: `PUT`
        - **Descrição**: Atualiza os dados de um fornecedor existente com base no ID fornecido na URL. A requisição exige que sejam enviados os dados necessários para a atualização, sendo eles: nome, logo, estado, custo por KWh, limite mínimo de KWh, total de clientes e média de avaliação. Onde as regras de negócios são as mesma que para o cadastro.
        

## :hammer_and_wrench: Tecnologias

Para a criação desta API REST, foram utilizadas as seguintes tecnologias:

- **TypeScript**: Linguagem para o desenvolvimento do back-end.
- **NestJS**: Framework para construção de aplicações Node.js baseado em TypeScript.
- **PostgreSQL**: Banco de dados relacional.
- **Prisma**: ORM que facilita a interação com o banco de dados PostgreSQL.
- **bcrypt**: Biblioteca de criptografia para hashing de senhas armazenando no banco de dados de maneira criptografada.
- **JWT (JSON Web Tokens) do NestJS**: Tecnologia utilizada para autenticação e autorização, permitindo a criação de tokens.
- **passport-google-oauth20**: Autenticação que integra o Google OAuth 2.0, permitindo login com contas do Google.


## :arrow_forward: Executar
```bash
# Clone o repositório.
$ git clone https://github.com/Arthur-SD15/ClarkeEnergia-API.git

# Instala todas as dependências.
$ npm install

# Executa.
$ npm start
 ```
