import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import {
  darkGray,
  darkWhite,
  lightLime,
  lightWhite,
} from "../../styles/variables";

export const Banner = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding-top: 50px;
  ${responsive(
    {
      gridTemplateColumns: "1fr",
      paddingTop: 100,
      gap: 25,
    },
    650
  )}
`;

export const Left = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  ${responsive(
    {
      alignItems: "center",
      textAlign: "center",
      margin: "auto",
    },
    650
  )}
`;

export const Heading = styled.h2`
  font-size: 52px;
  font-weight: 700;
  color: ${lightWhite};
  line-height: 1;
  span {
    color: ${lightLime};
  }
  ${responsive(
    {
      fontSize: 42,
    },
    800
  )}
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 1;
  color: ${darkWhite};
  width: 85%;
  margin-bottom: 10px;
  ${responsive(
    {
      fontSize: 16,
    },
    800
  )}
`;

export const Right = styled.div`
  display: grid;
  place-items: center;
  img {
    width: 80%;
  }
`;
