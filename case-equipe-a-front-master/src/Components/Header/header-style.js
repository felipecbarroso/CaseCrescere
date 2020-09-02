import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBar=styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
`

export const HeaderCenter=styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    height: 71px;
    justify-content: space-between;
    box-shadow: 0 4px 2px -3px #666;
    padding-left: 20px;
    margin-left: 199px;
`


export const Side=styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
  >button{
    border: none;
    background-color: #45B54A;
    margin: 5px;
    padding: 10px;
    color: #fff;
    border-radius: 4px;
  }
`


export const Botao=styled.button`
  border: none;
  background-color: #45B54A;
  margin: 5px;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
`
