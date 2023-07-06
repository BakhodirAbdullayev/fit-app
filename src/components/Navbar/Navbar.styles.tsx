import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import {
  darkGray,
  darkLime,
  lightLime,
  lightWhite,
} from "../../styles/variables";
import { NavbarProps } from "./Navbar.types";

export const Container = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  gap: 30px;
  left: ${(p) => (p.toggle ? "0" : "-100%")};
  &.glassmorphism2 {
    ${responsive(
      {
        backgroundColor: darkGray,
        backdropFilter: "blur(16px) saturate(187%)",
      },
      620
    )}
  }
  ${responsive(
    {
      gap: "20px",
    },
    768
  )};
  ${responsive(
    {
      transition: "0.4s",
      paddingTop: 30,
      position: "fixed",
      zIndex: 1000,
      top: 60,
      width: "100%",
      height: "100vh",
      flexDirection: "column",
    },
    620
  )}
`;

export const Link = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  padding: 7px 15px;
  border-radius: 5px;
  transition: 0.3s;
  border: 1px solid transparent;
  &:hover {
    color: ${lightLime};
    cursor: pointer;
    border: 1px solid ${lightLime};
  }
  &.active {
    background-color: ${lightLime};
    border: 1px solid ${lightLime};
    color: ${lightWhite};
  }
  &.active:hover {
    background-color: ${darkLime};
  }
  ${responsive(
    {
      padding: "5px 12px",
    },
    768
  )}
  ${responsive(
    {
      fontSize: 17,
      width: "60%",
      textAlign: "center",
      padding: 8,
    },
    620
  )}
`;
