import styled from "styled-components";
import { responsive } from "../../../styles/responsive";

export const Container = styled.div`
  width: 100%;
  .imgWrapper {
    height: 550px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    ${responsive(
      {
        height: 450,
      },
      900
    )}
    ${responsive(
      {
        height: 340,
      },
      600
    )}
  }
`;
