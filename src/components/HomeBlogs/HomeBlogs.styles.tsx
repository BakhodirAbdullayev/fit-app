import { Link } from "react-router-dom";
import styled from "styled-components";
import { responsive } from "../../styles/responsive";
import {
  darkLime,
  lightBlack,
  lightGray,
  lightLime,
} from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 70px;
`;

export const BlogsWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  align-items: center;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  ${responsive(
    {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    960
  )}
  ${responsive(
    {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    650
  )}
`;

export const Blog = styled.div`
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    .image {
      img {
        filter: grayscale(0.3) blur(1px);
        transform: scale(1.05);
      }
    }
  }
`;

export const BlogImage = styled.div`
  width: 100%;
  height: 230px;
  img {
    transition: 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  padding: 12px 20px;
  background-color: ${lightGray};
`;

export const Heading = styled.h2`
  font-size: 28px;
  line-height: 1;
`;

export const Desc = styled.p`
  font-size: 16px;
  text-align: justify;
  line-height: 1;
  color: ${lightBlack};
  margin: 7px 0 12px;
`;

export const BtnLink = styled(Link)`
  display: block;
  width: 100%;
  border: 2px solid ${darkLime};
  padding: 10px;
  text-align: center;
  border-radius: 0 0 8px 8px;
  font-size: 16px;
  font-weight: 500;

  color: ${darkLime};
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    color: ${lightGray};
    background-color: ${darkLime};
  }
`;
