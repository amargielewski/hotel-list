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

export const StyledResetFilterButton = styled.button`
  margin-left: 20px;
  font-size: 18px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.flame};
  border-radius: 5px;
`;
