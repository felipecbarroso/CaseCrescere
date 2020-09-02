import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #45B34A;
`;

export const Container = styled.div`
  padding: 30px;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  background-color: #FFFf;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: auto;
  margin-top: 30px;
  img {
    max-width: 300px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  align-items: center;
  h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size:20px;
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  input {
    padding: 10px;
    margin: 4px;
    border: none;
    border-bottom: 1px dotted #45B34A ;
    width: 300px;
    height: 50px;
    background:none;
    text-transform: uppercase;
    outline: none;
    transition: border-color .2s;
  }
  button {
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    margin: 4px;
    margin-top: 30px;
    background-color: #fff;
    color: #45B34A;
    height: 50px;
    font-size: 15px;
    font-style: bold;
    border: 2px solid #45B34A;
  }
  button:hover {
    cursor: pointer;
    background-color: #45B34A;
    color: #fff;
  }
  display:flex;
  flex-direction:column;
`;

export const ButtonLink = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: none;
  outline: none;
  margin: 5px;
  a {
    text-decoration: none;
    color: #45B34A;
    font-size:15px;
    font-style: bold;
  }
  &:hover {
    color:#003D16;
    cursor: pointer;
  }
  `;
