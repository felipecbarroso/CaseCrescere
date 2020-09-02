import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './register.css';
import Logo from '../../assets/images/logo.svg';
import {Container, Form , ButtonLink, Page, Fullbox, Halfbox } from './style';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import Modal from '../../Components/modal/modal';

function Register() {
  /** constante que passa para infos as informações do formulário */
  const [infos, setInfos] = useState({
    name: '',
    email: '',
    pass:'',
    cpf:'',
  });

  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password: pass, cpf,confirmPassword } = infos;



    const infosToApi = {
      name,
      email,
      pass,
      cpf
    };

    const response = await api.post('/users', infosToApi);

    if (response.status !== 201) {
      console.log(response);
      setMessage('Houve um erro ao criar o usuário');
      setModalIsOpen(true);
      //coloquei um modal no lugar dessa linha aqui embaixo
      // return alert('Houve um erro ao criado o usuário');
      //para poder ficar mais agradável do ponto de vista do UI 
    }

    setMessage('Usuário criado com sucesso!');
    setModalIsOpen(true);
    // alert('Usuário criado com sucesso');

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
        <h1>Faça seu Cadastro</h1>
        <ToastContainer/>
          <Fullbox>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={handleInputChange}
            />
          </Fullbox>
          <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />

          <Halfbox>
            <input
              type="text"
              name="cpf"
              placeholder="Digite a razão social"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Confirme a sua Senha"
              onChange={handleInputChange}
            />
          </Halfbox>
            <button type="submit">REGISTRAR</button>
            <p className= "erro-validation"></p>
          </Form>
      </Container>
      {modalIsOpen ? (
        <Modal container="containerAviso" onRequestClose={()=> setModalIsOpen(false)}>
          <p>{message}</p>
        </Modal>
      ) : null }
  </Page>
  );
}

export default Register;
