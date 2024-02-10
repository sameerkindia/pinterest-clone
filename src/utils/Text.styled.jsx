import styled from "styled-components";
import { SIZES } from "./sizes";

export const Text = styled.p`
  font-size: ${(props) => SIZES[props.size] || SIZES.normal};
  color: ${(props) => props.color || props.theme.textColor};
  color: ${(props) =>
    props.colorType === "pinterest" && props.theme.pinterestColor};
  color: ${(props) =>
    props.colorType === "signUpTextColor" && props.theme.signUpTextColor};
  white-space: nowrap;
  font-weight: 600;

  &.logo {
    letter-spacing: -1px;
  }
`;
