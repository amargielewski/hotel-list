import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;

export const RatingContainer = styled.div`
  font-size: 25px;
`;

export const FilterCounterContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px 0;
    align-items: center;
  }
`;
