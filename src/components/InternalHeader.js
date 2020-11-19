import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const InnerNavbar = styled.div`
  width: 100%;
`;

function InternalHeader({ children }) {
  return (
    <Navbar style={{ paddingTop: 10, paddingBottom: 0 }}>
      <InnerNavbar>{children}</InnerNavbar>
    </Navbar>
  );
}

export default InternalHeader;
