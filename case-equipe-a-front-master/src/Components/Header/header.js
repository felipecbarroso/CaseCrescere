import React from 'react';
import { HeaderCenter, Side, HeaderLeft, HeaderBar, Botao } from './header-style';
import Logo from '../../assets/images/image 3.svg';
import { useState } from 'react';
import Modal from '../modal/modal';

function Header() {

  const [modalDepositarIsOpen, setModalDepositarIsOpen] = useState(false);
  const [modalTransferirIsOpen, setModalTransferirIsOpen] = useState(false);
  const [codigo, setCodigo] = useState("");

  const gerarCodigo = () => {
    setCodigo(Math.random()*100000);
  }

  return (
    <HeaderBar>
    <HeaderCenter>
      <p>Bem vindo à conta <b>Nooma</b>!</p>
      <Side>
        <button type="button" onClick={()=> setModalDepositarIsOpen(true)}>Depositar</button>
        <button type="button" onClick={()=> setModalTransferirIsOpen(true)}>Transferir</button>
      </Side>
    </HeaderCenter>
    {modalDepositarIsOpen ? (
      <Modal container="containerAviso" onRequestClose={() => setModalDepositarIsOpen(false)} >
        <h4>Faça um depósito!</h4>
        <p>Basta gerar um código para confirmação</p>
        <Botao type='submit' onClick={()=> gerarCodigo()}>Gerar Código</Botao>
        <p><b>{codigo}</b></p>
      </Modal>
    ) : null}
    {modalTransferirIsOpen ? (
      <Modal container="containerAviso" onRequestClose={()=> setModalTransferirIsOpen(false)}>
        <p>Faça uma transferência!</p>
        <p>Basta gerar um código para confirmação</p>
        <Botao type='submit' onClick={()=> gerarCodigo()}>Gerar Código</Botao>
        <p><b>{codigo}</b></p>
      </Modal>
    ) : null
    }
    </HeaderBar>
  );
}
export default Header;
