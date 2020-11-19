import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import InternalHeader from "./InternalHeader";
import { useSidebar } from "../hooks/useSidebar";

const IconButton = styled.div`
  cursor: pointer;
`;

const IconAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

function MenuHeader({ title, children }) {
  const [toggle] = useSidebar();

  return (
    <InternalHeader>
      <IconAndTitle>
        <IconButton onClick={toggle}>
          <FontAwesomeIcon icon={faBars} color="white" size="2x" />
        </IconButton>

        <h2 style={{ marginLeft: 16 }}>{title}</h2>
      </IconAndTitle>

      {children}
    </InternalHeader>
  );
}

export default MenuHeader;
