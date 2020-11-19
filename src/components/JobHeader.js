import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import MenuHeader from "./MenuHeader";

const NavItem = styled(Nav.Item)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

function Header() {
  const location = useLocation();

  return (
    <MenuHeader>
      <Nav
        variant="tabs"
        activeKey={location.pathname.slice(1)}
        style={{ padding: "0 16px" }}
      >
        <NavItem>
          <Nav.Link href="/chat" eventKey="chat">
            Chat
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link href="/map" eventKey="map">
            Mapa
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link href="#" eventKey="details">
            Detalle
          </Nav.Link>
        </NavItem>
      </Nav>
    </MenuHeader>
  );
}

export default Header;
