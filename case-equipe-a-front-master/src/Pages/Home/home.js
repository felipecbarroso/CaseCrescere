import React, { useState } from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import '../../App.css';
import Navigation from '../../Components/Navigation/Navigation';
import CardSection from '../../Components/Cards/CardSections';
import Carousel from '../../Components/Carousel/carousel';
import { Page, Scroll } from './home-style';
import Graphic from '../../Components/Graphic/graphic';
import Header from '../../Components/Header/header';
import Modal from '../../Components/modal/modal';
import Tabela from '../../Components/tabela/tabela';


function Home () {

  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <>
      <Header/>
      <Page>
        <Navigation/>
        <Scroll>
          <Carousel>
           <CardSection/>
          </Carousel>
          <Graphic/>
          <Tabela/>
        </Scroll>
      </Page>
    </>
  );
}

export default Home;
