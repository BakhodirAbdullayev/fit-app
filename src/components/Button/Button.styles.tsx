import styled from "styled-components";
import { TextType } from "./Button.types";

export const BtnWrapper = styled.span<TextType>`
  font-size: 18px;
  font-weight: 600;
  color: ${(p) => (p.textColor ? p.textColor : "inherit")};
`;
