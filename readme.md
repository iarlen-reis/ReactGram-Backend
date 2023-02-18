## Description

Esse é o backend da aplicação **reactGram**, ele foi desenvolvido em **nodejs** utilizando **express.js**, as validações de backend foi feita com express-validator. Além disso, seu banco de dados é o **mongodb**, usando o Atlas para criar um banco online, para manipula-lo foi utilizado o **mongoose**. <br/>
A aplicação utiliza **Jsonwebtoken** para fazer autenticação dos usuários, todas as ações dentro da aplicação requer que
o usuário apresente o seu token de validação. Ao fazer o login o usuário recebe seu token e é criado um objeto onde é armazenado o token do usuário, o nome dele e o e-mail, assim podendo ser recuperado se necessário em alguma ação, como a ação de comentar ou curtir uma foto.

### Routes public:

- /api/users/login
- /api/users/register

### Routes private:

- Users:
- GET: /api/users/profile - Exibe o perfil do usuário através do token.
- GET: /api/users/:id - Exibe um perfil de um usuário através do id.
- PUT: /api/users/ - Atualiza as informações do usuário através do token.
  <br/>
- Photos:
- GET: /api/photos/ - Exibe todas as fotos disponiveis no banco de dados.
- GET: /api/photos/user/:idUser - Exibe as fotos de um usuário através do id dele.
- GET: /api/photos/:idPhoto - Exibe os detalhes de uma a partir do id dela.
- GET: /api/photos/search?q= - Exibe fotos relacionadas ao que foi pesquisado.
- PUT: /api/photos/:idPhoto - Atualiza uma foto a partir do id dela.
- PUT: /api/photos/like/:idPhoto - Dá like em uma foto a partir do id no token.
- PUT: /api/photos/comment/:idPhoto - Comenta em uma foto a partir do id no token.
- DEL: /api/photos/:idPhoto - Deleta uma foto a partir do id dela.
- POST: /api/photos/ - O usuário efeitua um post de uma foto.

## Tools

Ferramentas utilizadas no desenvolvimento.

NodeJs
[@NodeJs](https://nodejs.org/pt-br/)

ExpressJs <br>
[@ExpressJs](https://expressjs.com/pt-br/)

Express Validator <br>
[@ExpressValidator](https://express-validator.github.io/docs)

MongoDB <br>
[@MongoDB](https://www.mongodb.com/)

Mongoose <br>
[@Mongoose](https://mongoosejs.com/)
