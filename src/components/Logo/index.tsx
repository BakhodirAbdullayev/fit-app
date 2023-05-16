import React from "react";
import styled from "styled-components";
import { lightLime } from "../../styles/variables";

const Container = styled.div`
  font-size: 30px;
  font-weight: 600;
  span {
    font-weight: 700;
    color: ${lightLime};
  }
`;

const Logo = () => {
  return (
    <Container>
      <span>Fit</span> App
    </Container>
  );
};

export default Logo;
