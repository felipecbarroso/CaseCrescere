import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 5vh;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #45B34A;
  background-size: cover;
  background-position-y: -150px;
`;

export const Container = styled.div`
  width:500px;
  margin-left: auto;
  margin-right: auto;
  background-color:#fff;
  border-radius:10px;
  padding:25px;
  align-items: center;
  img {
    max-width: 300px;
    margin: auto;
    margin-left: 60px;
  }
`;

export const Form = styled.form`

  h1 {
    text-align: center;
    margin-top:20px;
    margin-bottom:20px;
    font-size: 1.6rem;
  }
  input {
    display: block;
    padding: 10px;
    margin: 4px;
    border: none;
    border-bottom: 1.2px solid #424342 ;
    width: 90%;
    height: 50px;
    background:none;
    text-transform: uppercase;
    outline: none;
    transition: border-color .2s;
  }
  input:focus {
    border-color:#45B34A;
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
    margin-left: 70px;

  }
  button:hover {
    cursor: pointer;
    background-color: #45B34A;
    color: #fff;
  }
  display:flex;
  flex-direction:column;
`;

export const Fullbox = styled.form`
  flex: 1 1 100%;
  position: relative;

`;

export const Halfbox = styled.form`
  flex: 1 1 45%;
  position: relative;

`;

// export const ButtonLink = styled.button`
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   background: none;
//   outline: none;
//   margin: 5px;
//   a {
//     text-decoration: none;
//     color: #45B34A;
//     font-size:15px;
//     font-style: bold;
//   }
//   &:hover {
//     color:#003D16;
//     cursor: pointer;
//   }
//   `;
