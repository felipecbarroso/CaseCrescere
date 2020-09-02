import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import {Container, Form , ButtonLink, Page} from './style';
import api from '../../services/api';

function Login() {
 // const token = localStorage.getItem('@chocolate-front/token');

 // if (token) {
  //  window.location.href = '/';
  //}

  const [infos, setInfos] = useState({
    email: '',
    password: '',
  });

  // ESTA FUNCAO É CHAMADA ASSIM QUE CLICA EM LOGAR

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const { email, password: pass } = infos;

    const infosToApi = {
      email,
      pass,
    };

    const response = await api.post('/login', infosToApi);


    if(response.status !== 200) {
      console.log(response);
      return alert('Houve um erro ao autenticar usuário');
    }

   // localStorage.setItem('@contaSimples-front/token', response.data.token);

    alert('Usuário autenticado com sucesso');
    localStorage.setItem('@contaSimples-front/user', response.data.user._id);
    window.location.href = '/home'; // redireciona a página para /
  };
  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };
    return (
        <Page>
            <Container>
              <img src={Logo} id= "logoWhite" alt="Logo Conta Simples" />

              <Form onSubmit={onFormSubmit}>

                <h1>Faça seu login</h1>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  onChange={handleInputChange}
                />

                <button type="submit">CONTINUAR</button>
              </Form>
              <ButtonLink>
                  <Link to = "/senha">Esqueci minha senha </Link>
                </ButtonLink>
                <ButtonLink>
                  <Link to = "/register">Ainda não sou cliente  </Link>
                </ButtonLink>
            </Container>
          </Page>
      );
    }

export default Login;
