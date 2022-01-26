import { useState } from 'react';
import { LeftArrowIcon } from '../Icons/LeftArrowIcon';
import { RightArrowIcon } from '../Icons/RightArrowIcon';

import {
  StyledWrapper,
  StyledLeftButton,
  StyledRightButton,
  StyledImage
} from './ImageSlider.styled';

const Images = [
  {
    url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG'
  },
  {
    url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg'
  },
  {
    url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg'
  }
];

export const ImageSlider = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = Images.length;

  if (!Array.isArray(Images) || Images.length <= 0) {
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
      <StyledLeftButton onClick={prevSlide}>
        <LeftArrowIcon />
      </StyledLeftButton>
      {Images.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide-active' : 'slide'}
            key={index}
          >
            {index === current && <StyledImage src={slide.url} alt="travel" />}
          </div>
        );
      })}
      <StyledRightButton onClick={nextSlide}>
        <RightArrowIcon />
      </StyledRightButton>
    </StyledWrapper>
  );
};
