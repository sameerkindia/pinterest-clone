import styled from "styled-components";
import { Text } from "../../utils/Text.styled";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.4rem 1rem 0 1.8rem;
  position: absolute;
  top: 0;

  z-index: 3;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: calc() 0.5rem;
`;

export const StyledLink = styled(Text)`
  margin: 1.5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AuthButton = styled(Text)`
  background-color: ${(props) => props.color || "#efefef"};
  padding: 0.7rem;
  border-radius: 100rem;
  color: ${(props) => (props.color ? "#fff" : "#000")};
  cursor: pointer;
`;
