import React from "react";
import { Container, Left, Right, Icon } from "./HomeSectionTitle.styles";
import { BsArrowRight } from "react-icons/bs";
import { TitleProps } from "./HomeSectionTitle.types";

const HomeSectionTitle = ({ text, link }: TitleProps) => {
  return (
    <Container>
      <Left>{text}</Left>
      <Right to={link}>
        <p>More</p>
        <Icon>
          <BsArrowRight />
        </Icon>
      </Right>
    </Container>
  );
};

export default HomeSectionTitle;
