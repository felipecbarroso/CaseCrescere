import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/image 3.svg';
import { Texto } from './style';


const useStyles = makeStyles((theme) => ({ // Definindo os estilos
  root: {
    paddingTop: '30px',
    backgroundColor: '#F5F7F4',
    height: '100vh',
  },
  drawerPaper: {width: 'inherit'},
  link: {textDecoration: 'none', color: theme.palette.text.primary},


}));

function Navigation() {
  const classes = useStyles(); // Chamada variavel.
  return(
    <Route>
    <div style={{ display: 'flex'}}>
      <Drawer
      style={{width: '200px'}}
      variant='persistent'
      anchor='left'
      open={true}
      classes={{paper: classes.drawerPaper}}
      >
      <img src={Logo} style={{paddingTop: '20px', paddingBottom: '10px', backgroundColor:'#F5F7F4' }}/>
        <List className={classes.root}>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Início"}/>
          </ListItem>
          </Link>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <LocalAtmOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Depositar"}/>
          </ListItem>
          </Link>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Extrato da Conta"}/>
          </ListItem>
          </Link>
          <Link to="/card" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <PaymentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Cartões"}/>
          </ListItem>
          </Link>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <MonetizationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Emitir Cobrança"}/>
          </ListItem>
          </Link>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Gestão de Cobrança"}/>
          </ListItem>
          </Link>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <CompareArrowsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Transferência"}/>
          </ListItem>
          </Link>
          <Link to="/home" className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <ReceiptOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Pagamentos"}/>
          </ListItem>
          </Link>
        </List>
        <Texto>Nooma Design</Texto>
        <Texto>Agencia 001</Texto>
        <Texto>Conta 22674-1</Texto>
        <Texto style={{marginBottom: '3px'}}>CNPJ: <b> 12.345.644/0001-70</b></Texto>
      </Drawer>
    </div>
    </Route>
  );
}

export default Navigation;
