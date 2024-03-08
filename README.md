# Gestão de Produtos - Aplicativo Web

Este projeto é um aplicativo web para gestão de produtos, desenvolvido com React.js no frontend e Spring Boot no backend. Ele permite aos usuários listar, adicionar, atualizar e excluir produtos de uma base de dados.

## Tecnologias Utilizadas

- **Frontend:**
  - React.js
  - Axios (para comunicação com o backend)
  - CSS para estilos e layout

- **Backend:**
  - Spring Boot
  - Spring Data JPA (para acesso aos dados)
  - Banco de Dados H2 (para armazenamento dos produtos)

## Funcionalidades Principais

- Listagem de todos os produtos cadastrados
- Adição de novos produtos
- Atualização e exclusão de produtos existentes

## Como Usar

1. Clone este repositório:

git clone https://github.com/EricksonLOOP/Gerenciador-de-Produtos---FullStack.git


2. Navegue até o diretório do projeto:

cd nome-do-repositorio


3. Inicie o backend:

cd backend
./mvnw spring-boot:run


O backend estará disponível em `http://localhost:8080`.

4. Em outro terminal, inicie o frontend:

cd frontend
npm install
npm start


O frontend estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
