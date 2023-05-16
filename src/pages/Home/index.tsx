import React from "react";
import HomeBlogs from "../../components/HomeBlogs";
import HomeCategs from "../../components/HomeCategs";
import HomeClubs from "../../components/HomeClubs";
import Showcase from "../../components/Showcase";

const HomePage = () => {
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
