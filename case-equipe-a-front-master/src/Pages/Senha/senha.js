import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import {Container, Form , ButtonLink, Page} from './style';

function Senha() {
  return (
    <Page>
        <Container>
          <Form>
            <img src={Logo} id= "logoWhite" alt="Logo Conta Simples" />
            <h1>Redefina sua senha</h1>
            <input
              type="password"
              name="password"
              placeholder="Digite a nova senha"
              //onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Confirme a nova senha"
              //onChange={handleInputChange}
            />
            <button type="submit">REDEFINIR</button>
          </Form>
        </Container>
      </Page>
  );
}

export default Senha;
