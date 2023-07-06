import React from "react";
import HomeSectionTitle from "../HomeSectionTitle";
import {
  Blog,
  BlogImage,
  BlogsWrapper,
  Body,
  BtnLink,
  Container,
  Desc,
  Heading,
} from "./HomeBlogs.styles";

const arr = [
  {
    id: "123",
    image:
      "https://www.morelandobgyn.com/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg",
    title: "Benefits of healthy foods",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut officiis. At cum exercitationem pariatur error, corrupti consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut officiis. At cum exercitationem pariatur error, corrupti consequatur",
  },
  {
    id: "12z3",
    image:
      "https://www.morelandobgyn.com/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg",
    title: "Benefits of healthy foods",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut officiis. At cum exercitationem pariatur error, corrupti consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut officiis. At cum exercitationem pariatur error, corrupti consequatur",
  },
  {
    id: "w23",
    image:
      "https://www.morelandobgyn.com/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg",
    title: "Benefits of healthy foods",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut officiis. At cum exercitationem pariatur error, corrupti consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ut officiis. At cum exercitationem pariatur error, corrupti consequatur?",
  },
];

const HomeBlogs = () => {
  return (
    <Container>
      <HomeSectionTitle
        text={
          <>
            Useful <span>Blogs</span>
          </>
        }
        link="/blog"
      />
      <BlogsWrapper>
        {arr.map((a, i) => {
          if (window.innerWidth < 960 && i > 1) return null;
          return (
            <Blog key={a.id}>
              <BlogImage className="image">
                <img src={a.image} alt={a.title} />
              </BlogImage>
              <Body>
                <Heading>{a.title}</Heading>
                <Desc>{a.description}</Desc>
                <BtnLink to={"/blog" + a.id}>More Reading</BtnLink>
              </Body>
            </Blog>
          );
        })}
      </BlogsWrapper>
    </Container>
  );
};

export default HomeBlogs;
