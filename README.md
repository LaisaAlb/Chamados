# Chamados

**Chamados** é uma aplicação React que permite a visualização, gerenciamento e interação com chamados. O projeto utiliza o Firebase para gerenciamento de dados e é estruturado com componentes React, além de integração com o React Router para navegação entre páginas.

## Funcionalidades

- **Exibição de chamados**: A aplicação permite visualizar chamados registrados, com detalhes sobre status, cliente e data de criação.
- **Criação de novos chamados**: A interface oferece a opção de adicionar novos chamados ao sistema.
- **Modal de visualização de detalhes**: Modal para exibição dos detalhes de um chamado.
- **Busca por mais chamados**: A funcionalidade de "carregar mais" permite ao usuário acessar novos chamados de forma assíncrona.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Firebase**: Usado para autenticação e gerenciamento de dados.
- **React Router**: Para navegação entre as páginas do aplicativo.
- **React Icons**: Biblioteca para ícones vetoriais.
- **Date-fns**: Biblioteca para manipulação de datas.
- **React Toastify**: Para exibição de notificações.
- **Jest & React Testing Library**: Para testes automatizados.

## Dependências

As principais dependências do projeto incluem:

- `react`: Biblioteca principal para construção de interfaces.
- `firebase`: Para integração com Firebase (Firestore e autenticação).
- `react-router-dom`: Para roteamento no React.
- `react-icons`: Para ícones SVG.
- `date-fns`: Para manipulação de datas.
- `react-toastify`: Para exibição de notificações de sucesso ou erro.
- `@testing-library/react`: Biblioteca para testes de componentes React.
- `@testing-library/jest-dom`: Extensão para asserções nos testes com Jest.
- `@testing-library/user-event`: Biblioteca para simular interações do usuário nos testes.

## Scripts

Os seguintes scripts estão disponíveis para gerenciar o projeto:

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada da aplicação para produção.
- `npm test`: Executa os testes automatizados do projeto.
- `npm run eject`: Ejecta a configuração do Create React App (somente se necessário).

## Instalação

Para rodar o projeto localmente, siga as etapas abaixo:

1. **Clone o repositório**:
    ```bash
    git clone <url-do-repositorio>
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm start
    ```

4. O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).


## Configuração do Firebase

Para usar o Firebase no seu projeto, crie um projeto no [Firebase Console](https://console.firebase.google.com/) e configure a autenticação e o Firestore. Certifique-se de configurar corretamente as credenciais no seu arquivo `firebaseConnection.js`.

### Exemplo de Configuração Firebase:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


## Licença
Este projeto está licenciado sob a MIT License.


