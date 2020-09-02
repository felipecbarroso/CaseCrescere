import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-elastic-carousel';
import Cards from '../Cards/CardSections';

function Carrousel() {
  return(
        <Carousel>

          <Cards />
          <Cards />
          <Cards />

        </Carousel>

);
}
export default Carrousel;
