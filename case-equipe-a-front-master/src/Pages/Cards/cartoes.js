import React, { useState, useEffect } from 'react';
import { CardList} from './style';
import api from '../../services/api';
function Cards(){

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      const response = await api.get('/card');
      setInfos(response.data);
    }
    loadInfos();
  }, []);
return (
          <CardList>
            <h2>Informações de cartões</h2>
            {infos.map((info) => (
              <li key={info._id}>
                  <br/>
                  <div>
                    <h2>{info.Number}</h2>
                      <p>{info.balance}</p>
                      <p>{info.totalLimit}</p>
                      <p>{info.cardExpire}</p>
                  </div>
              </li>
            ))}
          </CardList>
  );
}

export default Cards;
