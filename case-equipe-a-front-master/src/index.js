import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import Home from './Pages/Home/home';
import Register from './Pages/Register/register';
import Senha from './Pages/Senha/senha';
import Card from './Pages/Cards/cartoes';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact="true" component={Login} />
        <Route path="/home" exact="true" component={Home} />
        <Route path="/register" exact="true" component={Register} />
        <Route path="/senha" exact="true" component={Senha} />
        <Route path="/card" exact="true" component={Card} />
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


