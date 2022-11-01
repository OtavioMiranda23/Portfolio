import React, { useState } from "react";

import {
  Container,
  LeftArrowStyles,
  RightArrowStyles,
  SlideStyles,
} from "./styles";

interface ICarousel {
  slides: any;
}

const Carousel: React.FC<ICarousel> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; // se for o primeiro slide, o index voltará para o último, caso contrário, voltará para o anterior
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === 0;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Container>
      <LeftArrowStyles onClick={goToPrevious}>❰</LeftArrowStyles>
      <SlideStyles> slides </SlideStyles>
      <RightArrowStyles onClick={goToNext}> ❱ </RightArrowStyles>
      {slides.map((slide: any, slideIndex: number) => {
        <SlideStyles
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
        ></SlideStyles>;
      })}
    </Container>
  );
};

export default Carousel;
