import React, { useState } from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import BackHeader from "../components/BackHeader";
import JobService from "../services/JobService";

const FormularyContainer = styled.div`
  background-color: #eeeeee;
  padding: 16px 32px;
`;

const FormularyContent = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

function Formulary() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const createJob = async () => {
    const job = {
      title,
      amount,
      address,
      district,
      startDate,
      endDate,
      description,
    };
    const result = await JobService.createJob(job);
    console.log("result", result);
    const { status } = result;
    if (status === 200) {
      window.location.href = "/";
    } else {
      alert("Error al crear el anuncio");
    }
  };

  return (
    <FormularyContainer>
      <FormularyContent>
        <Form.Group>
          <Form.Label>Puesto del empleo</Form.Label>
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Electricista, gasfitero, vendedor, ..."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Oferta (S/.)</Form.Label>
          <Form.Control
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="100.00"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Av. Jesus 302"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Distrito</Form.Label>
          <Form.Control
            onChange={(e) => setDistrict(e.target.value)}
            type="text"
            placeholder="Paucarpata"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Inicio</Form.Label>
          <Form.Control
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            placeholder="24/07/2020"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Vencimiento</Form.Label>
          <Form.Control
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            placeholder="24/07/2020"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder="Necesito tecnico con urgencia, para arreglar un ..."
          />
        </Form.Group>
      </FormularyContent>

      <Button onClick={createJob} variant="primary" block>
        Publicar
      </Button>
    </FormularyContainer>
  );
}

const Container = styled.div`
  margin-bottom: 64px;

  @media screen and (max-width: 600px) {
    margin-bottom: 0;
  }
`;

function CreateJob() {
  return (
    <Container>
      <BackHeader title="Nueva Chamba" href="/" />
      <Formulary />
    </Container>
  );
}

export default CreateJob;
