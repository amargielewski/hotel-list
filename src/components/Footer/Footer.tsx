import { TextSmall } from '../Typography/Typography.styled';
import {
  StyledWrapper,
  StyledTextContainer,
  StyledLink
} from './Footer.styled';

export const Footer = () => {
  return (
    <StyledWrapper>
      <StyledTextContainer>
        <StyledLink target="_blank" href="https://github.com/amargielewski">
          https://github.com/amargielewski
        </StyledLink>
        <TextSmall>Aleksander Margielewski</TextSmall>
      </StyledTextContainer>
    </StyledWrapper>
  );
};
