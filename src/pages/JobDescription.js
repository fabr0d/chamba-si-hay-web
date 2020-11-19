import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import MenuHeader from "../components/MenuHeader";

const DescriptionContainer = styled.div`
  background-color: #eeeeee;
  padding: 16px 32px;
`;

const CardContainer = styled.div`
  background-color: #00988d;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const PairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.div`
  color: white;
  opacity: 0.6;
  font-weight: 400;
`;

const Value = styled.div`
  color: white;
`;

const DescriptionContent = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const OperationsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

function Description() {
  return (
    <DescriptionContainer>
      <CardContainer>
        <Label>Oferta</Label>
        <h2>S/. 230.00</h2>
        <PairContainer>
          <Label>Puesto</Label>
          <Value>Gasfitero</Value>
        </PairContainer>
        <PairContainer>
          <Label>Lugar</Label>
          <Value>Paucarpata</Value>
        </PairContainer>
        <PairContainer>
          <Label>Fecha</Label>
          <Value>4:45 Hoy</Value>
        </PairContainer>
      </CardContainer>

      <DescriptionContent>
        <h4>Descripción:</h4>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. sad
        </p>
      </DescriptionContent>

      <OperationsContainer>
        <Button variant="primary" style={{ color: "white", width: "100%" }}>
          Aceptar
        </Button>
        <Button variant="danger" style={{ width: "100%" }}>
          Rechazar
        </Button>
      </OperationsContainer>
    </DescriptionContainer>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function JobDescription() {
  return (
    <Container>
      <MenuHeader title="Trabajo" />
      <Description />
    </Container>
  );
}

export default JobDescription;
