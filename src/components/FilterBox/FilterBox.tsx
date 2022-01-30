import {
  StyledWrapper,
  RatingContainer,
  FilterCounterContainer,
  StyledResetFilterButton
} from './FilterBox.styled';
import { StarIcon } from '../Icons/StarIcon';
import { Rating } from 'react-simple-star-rating';
import { FilterCounter } from './FilterCounter';
import { useContext } from 'react';
import { StateActionKind, stateContext } from '../../providers/state';

export const FilterBox = () => {
  const { state, dispatch } = useContext(stateContext);

  const handleRatingChange = (stars: number) => {
    dispatch({ type: StateActionKind.UDATE_STARS, payload: stars });
  };
  const handleAdultsChange = (adults: number) => {
    dispatch({ type: StateActionKind.UDATE_ADULTS, payload: adults });
  };
  const handleChildrenChange = (childs: number) => {
    dispatch({ type: StateActionKind.UPDATE_CHILDREN, payload: childs });
  };

  const handleResetChange = () => {
    dispatch({ type: StateActionKind.RESET_STATE });
  };
  return (
    <StyledWrapper>
      <RatingContainer>
        <Rating
          allowHover={false}
          onClick={handleRatingChange}
          ratingValue={state.stars ?? 0}
          emptyIcon={<StarIcon color="#d3d3d3" />}
          fullIcon={<StarIcon color="#ffbc0b" />}
        />
      </RatingContainer>
      <FilterCounterContainer>
        <FilterCounter name="adults" handleChange={handleAdultsChange} />
        <FilterCounter name="children" handleChange={handleChildrenChange} />
      </FilterCounterContainer>
      <StyledResetFilterButton onClick={handleResetChange}>
        Reset
      </StyledResetFilterButton>
    </StyledWrapper>
  );
};
