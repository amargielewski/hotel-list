import { HeaderWrapper, HeaderLogo } from './Header.styled';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>hotel explorer</HeaderLogo>
    </HeaderWrapper>
  );
};
