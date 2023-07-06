import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import { lightLime, lightWhite } from "../../styles/variables";
import { ContainerProps } from "./Layout.types";

export const Container = styled.div<ContainerProps>`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  /* @media screen and (max-width: 620px) {
    overflow-y: ${(p) => (p.toggle ? "hidden" : "auto")};
    height: ${(p) => (p.toggle ? "100vh" : "auto")};
  } */
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1400px;
  height: 80px;
  padding: 15px;
  color: ${lightWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  &.ggg {
    ${responsive(
      {
        backgroundColor: "rgba(35, 35, 35, 0.8)",
        backdropFilter: "blur(12px) saturate(187%)",
      },
      620
    )}
  }
  /* glassmorphism */
  &.glassmorphism {
    background-color: rgba(46, 46, 46, 0.7);
    -webkit-backdrop-filter: blur(12px) saturate(187%);
    backdrop-filter: blur(12px) saturate(187%);
  }
  ${responsive({ height: 60 }, 620)}
`;

export const Toggle = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  place-items: center;
  font-size: 35px;
  color: ${lightWhite};
  cursor: pointer;
  transition: 0.3s;
  ${responsive({ display: "grid" }, 620)}
`;

export const Body = styled.div`
  width: 100%;
  height: auto;
`;
