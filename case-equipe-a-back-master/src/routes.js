const routes = require('express').Router();
const transactionController = require('./app/controllers/transactionController');
const cardController = require('./app/controllers/cardController');
const employController = require('./app/controllers/employController')
const validators = require('./app/middlewares/validators');
const UserController = require('./app/controllers/UserController');
const jwtMid = require('./app/middlewares/jwt');


//Login
routes.post('/login', UserController.auth);
// routes.use(jwtMid);
routes.post('/forgot_password', UserController.forgot);
routes.post('/reset_password', UserController.reset);

//Rotas para cartoes
routes.post('/card', cardController.store);
routes.get('/card', cardController.index);
routes.get('/card/:id', cardController.getCardByAccountID);
routes.delete('/card/:id', cardController.destroy);
routes.put('/card/:id', cardController.update);



//Rotas para transações
routes.post('/transaction', transactionController.store);
routes.get('/transaction', transactionController.index);
routes.get('/transaction/cre', transactionController.TransactionsCredit); 
routes.get('/transaction/deb', transactionController.TransactionsDebit);

//rotas para funcionários
routes.post('/employ', employController.store)
routes.get('/employ', employController.index);
routes.get('/employ/:id', employController.show);
routes.delete('/employ/:id', employController.destroy);
routes.post('/forgot_employ_password', employController.forgot);
routes.post('/reset_employ_password', employController.reset);

//rotas de usuários
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);


module.exports = routes;
