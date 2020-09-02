import React, { useState, useEffect } from 'react';
import {InlineStyle, BoxTabela} from './tabela-style';
import api from '../../services/api';
function Tabela(){

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      const response = await api.get('/transaction');
      setInfos(response.data);
    }
    loadInfos();
  }, []);

  return(
    <>
    <InlineStyle>
      <p>Últimas Transações</p>
      <button type="button">VER EXTRATO COMPLETO</button>
    </InlineStyle>
    <BoxTabela>

      <tr>
        <th>Data da transação</th>
        <th>Valor</th>
        <th>Tipo de Operação</th>
      </tr>
      {infos.map((info) => (
      <tr key={info._id}>
        <td>{info.date}</td>
        <td>{info.value}</td>
        <td>{(info.operationId==0)?'debito':'credito'}</td>
        </tr>
       ))}
    </BoxTabela>
  </>
  )
}
export default Tabela;
