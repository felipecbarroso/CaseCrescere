import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import api from '../../services/api';
import React, { useState, useEffect } from 'react';

const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
  padding: '10px',
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#45B34A',
}

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #45B34A',
      boxSizing: 'border-box',
      borderRadius: '10px',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
      transition: '0.5s',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#45B34A',
    }
  }

};

const cards = [
  {
    title: 'Saldo',
    amount: 'R$ 21.837,00',
    icon: 'Money',
    percentage: '2.3',
  },
  ]

const CardsSection = () => {

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      const response = await api.get('/card');
      setInfos(response.data);
    }
    loadInfos();
  }, []);
 const tipos = ['Alimentação','Virtual','Físico'];
 var i = 0;
 initializeIcons();
  return (
    <div style={container}>
      {infos.map((info) => (
        <div className="s-Grid-col ms-sm3 ms-xl3" style={{margin: '20px'}}>
          <Card styles={styles.cardStyles}>
                <Card.Section>
                    <Card.Item>
                        <Text styles={styles.header}> Cartão <br/> {info.Number}</Text>
                    </Card.Item>
                    <Card.Item>
                        <Text styles={styles.amount}>Limite: <br/>{info.totalLimit}</Text>
                    </Card.Item>
                    <Card.Item>
                        <Text styles={styles.percentage}>
                        Gastos:{info.balance} <br/>
                        ({tipos[i]}){i++}
                        </Text>
                    </Card.Item>
                </Card.Section>
          </Card>
        </div>

      ))}
    </div>
  );
};

export default CardsSection;
