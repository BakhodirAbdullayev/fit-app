import styled from "styled-components";
import {
  darkBlack,
  darkLime,
  lightBlack,
  lightGray,
  lightLime,
} from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  .swiper-scrollbar-horizontal {
    transform: translateY(20px);
    display: none;
  }
  .slider:hover {
    cursor: grab;
  }
`;

export const Card = styled.div`
  max-width: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px;
  background-color: ${lightGray};
  color: ${darkBlack};
  margin: auto;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 5px 1px ${lightBlack}, 0 1px 3px ${darkLime};
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardBody = styled.div`
  padding: 15px;
  &:hover .name {
    color: ${darkLime};
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  font-size: 20px;
  font-weight: 600;
`;
export const Name = styled.div`
  transition: 0.2s;
  font-weight: 700;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: fantasy;
  line-height: 1;
  span {
    color: #fdcc0d;
    font-size: 27px;
  }
`;
export const Locat = styled.div`
  font-size: 15px;
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${lightBlack};
  font-weight: 600;
  svg {
    font-size: 20px;
  }
`;
