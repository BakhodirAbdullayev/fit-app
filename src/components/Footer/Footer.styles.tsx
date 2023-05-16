import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import {
  darkGray,
  darkLime,
  darkWhite,
  lightBlack,
  lightGray,
  lightLime,
  lightWhite,
} from "../../styles/variables";

export const Container = styled.footer`
  width: 100%;
  .pt {
    padding-top: 20px;
    ${responsive(
      {
        padding: 0,
      },
      592
    )}
  }
`;
export const Line = styled.div`
  width: calc(100% - 10px);
  height: 2px;
  margin: 10px auto;
  background-color: #fff;
  opacity: 0.8;
`;
export const Top = styled.div`
  max-width: 600px;
  margin: 30px auto;
  text-align: center;
`;
export const Name = styled.h2`
  color: ${lightWhite};
  font-size: 40px;
  span {
    color: ${lightLime};
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.1;
  color: ${darkWhite};
  margin: 10px 0 20px;
  padding: 10px;
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const SocialLink = styled.a`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: ${lightLime};
  border-radius: 50%;
  border: 1px solid ${lightLime};
  box-shadow: 0 0 0 0.5px ${lightLime};
  transition: 0.3s;
  &:hover {
    color: ${darkGray};
    background-color: ${lightLime};
  }
`;
export const Body = styled.div`
  width: 100%;
  padding: 30px 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  background: linear-gradient(to bottom, transparent 50%, ${lightLime});
  ${responsive(
    {
      flexWrap: "wrap",
    },
    750
  )}
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
export const CardIcon = styled.div`
  font-size: 35px;
  color: ${darkLime};
`;
export const CardName = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  /* font-weight: 500; */
  color: ${darkWhite};
  margin-top: 5px;
`;
export const CardContact = styled.a`
  font-size: 17px;
  font-weight: 500;
  color: ${darkWhite};
`;
