import React from "react";
import { Container, Link } from "./Navbar.styles";
import { NavbarProps } from "./Navbar.types";
import { routesData } from "../../utils/Routes.data";

const Navbar = ({ toggle, handleToggleClick }: NavbarProps) => {
  return (
    <Container
      className="glassmorphism2"
      toggle={toggle}
      onClick={handleToggleClick && handleToggleClick}
    >
      {routesData.map((r, i) => (
        <Link to={r.path} key={i}>
          {r.name}
        </Link>
      ))}
    </Container>
  );
};

export default Navbar;
