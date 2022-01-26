import { StyledWrapper, RatingContainer } from './FilterBox.styled';
import { StarIcon } from '../Icons/StarIcon';
import { Rating } from 'react-simple-star-rating';
import { FilterCounter } from './FilterCounter';
export const FilterBox = () => {
  return (
    <StyledWrapper>
      <RatingContainer>
        <Rating
          ratingValue={0}
          emptyIcon={<StarIcon color="lighray" />}
          fullIcon={<StarIcon color="#ffbc0b" />}
        />
      </RatingContainer>
      <FilterCounter name="adults" />
      <FilterCounter name="children" />
    </StyledWrapper>
  );
};
