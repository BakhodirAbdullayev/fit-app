import React from "react";
import { Container, Link } from "./Navbar.styles";
import { NavbarProps } from "./Navbar.types";

const Navbar = ({ toggle, handleToggleClick }: NavbarProps) => {
  return (
    <Container
      className="glassmorphism2"
      toggle={toggle}
      onClick={handleToggleClick && handleToggleClick}
    >
      <Link to="/">Home</Link>
      <Link to="/clubs">Clubs</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </Container>
  );
};

export default Navbar;
