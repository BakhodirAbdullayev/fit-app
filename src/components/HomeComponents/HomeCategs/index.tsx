import React from "react";
import HomeSectionTitle from "../HomeSectionTitle";
import { Categ, CategName, Container, Wrapper } from "./HomeCategs.styles";

const arr = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2CmZJHq7j52DefXr1HgAg-xyukQVeMdmUA&usqp=CAU",
    name: "Gym",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSJxUjaoiX9Uieqj2DfKShI-icadwVPjgoA&usqp=CAU",
    name: "Tennis",
  },
  {
    image: "https://blog.nasm.org/hubfs/benefits-of-stretching.jpg",
    name: "Stretching",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjl0b2u6Rd69f8tsMU_Ww6JMlcVoBytPkuw&usqp=CAU&reload=on",
    name: "Swimming",
  },
];

const HomeCategs = () => {
  return (
    <Container>
      <HomeSectionTitle
        text={
          <>
            Popular <span>Categories</span>
          </>
        }
        link="/clubs"
      />
      <Wrapper>
        {arr.map((a, i) => (
          <Categ key={i}>
            <img src={a.image} alt={a.name} />
            <CategName>{a.name}</CategName>
          </Categ>
        ))}
      </Wrapper>
    </Container>
  );
};

export default HomeCategs;
