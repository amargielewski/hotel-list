import { FooterLogo, FooterWrapper } from './Footer.styled';

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterLogo>Footer</FooterLogo>
    </FooterWrapper>
  );
};
