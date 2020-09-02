import styled from 'styled-components';

export const InlineStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 70vw;
  > p {
    font-weight: bold;
    font-size: 20px;
  }
  > button {
    border: none;
    background-color: #45b54a;
    margin: 5px;
    padding: 7px;
    color: #fff;
    border-radius: 4px;
    font-size: 10px;
  }
`

export const BoxTabela=styled.table`
  margin: 30px;
  background-color: #FDFDFD;
  border: 1px solid #F0F0F0;
  border-radius: 10px;
  width: 70vw;
  margin-top: 0;
  tr{
    padding: 10px;
  }

  th{
    font-weight: lighter;
    color: #999999;
    padding: 25px;
  }

  td{
    padding: 10px;
  }
`
