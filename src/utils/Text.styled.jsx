import styled from "styled-components";
import { SIZES } from "./sizes";

export const Text = styled.p`
  font-size: ${(props) => SIZES[props.size] || SIZES.normal};
  color: ${(props) => props.color || props.theme.textColor};
  white-space: nowrap;
  font-weight: 600;

  &.logo {
    letter-spacing: -1px;
  }
`;
