import { Text } from "../../utils/Text.styled";
import {
  AuthButton,
  AuthButtonsContainer,
  LinkContainer,
  LogoContainer,
  StyledHeader,
  StyledLink,
} from "./Header.styled";
import { FaPinterest } from "react-icons/fa6";

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <FaPinterest size={33} color="#e60022" />
        <Text as="h1" size="large" color="#e60022" className="logo">
          Pinterest
        </Text>
      </LogoContainer>
      <LinkContainer>
        <StyledLink as="a">About</StyledLink>
        <StyledLink as="a">Business</StyledLink>
        <StyledLink as="a">Blog</StyledLink>
        <AuthButtonsContainer>
          <AuthButton color="#e60022">Sign up</AuthButton>
          <AuthButton>Sign in</AuthButton>
        </AuthButtonsContainer>
      </LinkContainer>
    </StyledHeader>
  );
}

export default Header;
