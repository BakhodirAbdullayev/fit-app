import { Link } from "react-router-dom";
import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import {
  darkWhite,
  lightGray,
  lightLime,
  lightWhite,
} from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${darkWhite};
  span {
    color: ${lightLime};
  }
`;

export const Right = styled(Link)`
  padding: 7px 15px;
  height: 100%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  gap: 8px;
  color: ${lightWhite};
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    color: ${lightLime};
    box-shadow: 0 0 1px 1px ${lightLime};
  }
  ${responsive(
    {
      width: 40,
      height: 40,
      gap: 0,
      justifyContent: "center",
      borderRadius: "50%",
      border: `1px solid ${lightLime}`,
    },
    500
  )}
  p {
    ${responsive(
      {
        display: "none",
      },
      500
    )}
  }
`;
export const Icon = styled.div`
  font-size: 30px;
  height: 100%;
  color: ${lightLime};
  display: grid;
  place-items: center;
  ${responsive(
    {
      fontSize: 25,
    },
    500
  )}
`;
