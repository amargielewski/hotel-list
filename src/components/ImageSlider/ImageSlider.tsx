import { useState } from 'react';
import { LeftArrowIcon } from '../Icons/LeftArrowIcon';
import { RightArrowIcon } from '../Icons/RightArrowIcon';

import {
  StyledWrapper,
  StyledLeftButton,
  StyledRightButton,
  StyledImage
} from './ImageSlider.styled';

import { Image } from '../../types/hotels';

export type ImageSliderProps = {
  images: Image[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState<number>(0);
  const length = images.length;

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <StyledWrapper>
      {length !== 1 && (
        <StyledLeftButton onClick={prevSlide}>
          <LeftArrowIcon />
        </StyledLeftButton>
      )}
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide-active' : 'slide'}
            key={index}
          >
            {index === current && <StyledImage src={slide.url} alt="travel" />}
          </div>
        );
      })}
      {length !== 1 && (
        <StyledRightButton onClick={nextSlide}>
          <RightArrowIcon />
        </StyledRightButton>
      )}
    </StyledWrapper>
  );
};
