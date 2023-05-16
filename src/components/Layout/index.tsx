import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import { Body, Container, Header, Toggle } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";
import { HiXMark, HiOutlineBars3 } from "react-icons/hi2";
import Footer from "../Footer";

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTogleClick = (): void => {
    setToggle((p) => !p);
  };

  return (
    <>
      <Container toggle={toggle}>
        <Header
          className={
            (isScrolled ? "glassmorphism" : "") + " " + (toggle ? "ggg" : "")
          }
        >
          <Logo />
          <Navbar toggle={toggle} handleToggleClick={handleTogleClick} />
          <Toggle onClick={handleTogleClick}>
            {!toggle ? <HiOutlineBars3 /> : <HiXMark />}
          </Toggle>
        </Header>
        <Body>{children}</Body>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
