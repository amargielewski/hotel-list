import { StyledWrapper, RatingContainer } from './FilterBox.styled';
import Rating from 'react-rating';
import { StarIcon } from '../Icons/StarIcon';
import { FilterCounter } from './FilterCounter';

export const FilterBox = () => {
  return (
    <StyledWrapper>
      <RatingContainer>
        <Rating
          emptySymbol={<StarIcon color={'lightgray'} />}
          fullSymbol={<StarIcon color={'gold'} />}
          fractions={2}
        />
      </RatingContainer>
      <FilterCounter name="adults" />
      <FilterCounter name="children" />
    </StyledWrapper>
  );
};
