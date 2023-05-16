import React from "react";
import { Banner, Heading, Left, Right, Text } from "./Showcase.styles";
import Image from "../../images/showcase.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import { darkWhite, lightWhite } from "../../styles/variables";

const Showcase = () => {
  return (
    <>
      <Banner>
        <Left>
          <Heading>
            <span>Play sports,</span> be healthy
          </Heading>
          <Text>
            Clearly, sports can help you reach your fitness goals and maintain a
            healthy weight. However, they also encourage healthy decision-making
            such as not smoking and not drinking. Sports also have hidden health
            benefits such as lowering the chance of osteoporosis or breast
            cancer later in life.
          </Text>
          <Link to="clubs" style={{ width: "max-content" }}>
            <Button variant="contained" textColor={darkWhite}>
              Go workout
            </Button>
          </Link>
        </Left>
        <Right>
          <img src={Image} alt="showcase photo " />
        </Right>
      </Banner>
    </>
  );
};

export default Showcase;
