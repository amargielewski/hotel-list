import { TextSmall } from '../Typography/Typography.styled';
import {
  StyledWrapper,
  StyledTextContainer,
  StyledLink
} from './Footer.styled';

type FooterProps = {};

export const Footer = (props: FooterProps) => {
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
