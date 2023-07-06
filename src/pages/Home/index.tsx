import React from "react";
import {
  HomeBlogs,
  HomeCategs,
  HomeClubs,
} from "../../components/HomeComponents";
import Showcase from "../../components/Showcase";

const HomePage: React.FC = () => {
  return (
    <>
      <Showcase />
      <HomeCategs />
      <HomeClubs />
      <HomeBlogs />
    </>
  );
};

export default HomePage;
