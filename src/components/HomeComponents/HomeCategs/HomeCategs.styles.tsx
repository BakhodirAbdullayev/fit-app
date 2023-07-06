import styled from "styled-components";
import { responsive } from "../../../styles/responsive";
import {
  darkBlack,
  darkLime,
  darkWhite,
  lightBlack,
} from "../../../styles/variables";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  ${responsive(
    {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    700
  )}
`;
export const Categ = styled.div`
  position: relative;
  max-width: 300px;
  height: 200px;
  border-radius: 8px 8px 1px 1px;
  transition: 0.3s;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: 0.3s;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000 85%);
  }
  &:hover {
    box-shadow: 0px 2px 5px ${darkLime};
    img {
      transform: scale(1.08);
    }
  }
`;
export const CategName = styled.h3`
  width: 100%;
  color: ${darkWhite};
  z-index: 100;
  font-weight: 600;
  letter-spacing: 2px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
`;
