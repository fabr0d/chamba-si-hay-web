import React from 'react'
import styled from 'styled-components'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import BackHeader from '../components/BackHeader'

const FormularyContainer = styled.div`
  background-color: #EEEEEE;
  padding: 16px 32px;
`

const FormularyContent = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`

function Formulary() {
  return (
    <FormularyContainer>
      <FormularyContent>
        <Form.Group>
          <Form.Label>Puesto del empleo</Form.Label>
          <Form.Control type='text' placeholder='Electricista, gasfitero, vendedor, ...'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Oferta (S/.)</Form.Label>
          <Form.Control type='text' placeholder='100.00'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control type='text' placeholder='Av. Jesus 302'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Distrito</Form.Label>
          <Form.Control type='text' placeholder='Paucarpata'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Inicio</Form.Label>
          <Form.Control type='text' placeholder='24/07/2020'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Vencimiento</Form.Label>
          <Form.Control type='text' placeholder='24/07/2020'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Hora</Form.Label>
          <Form.Control type='text' placeholder='16:00'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='Necesito tecnico con urgencia, para arreglar un ...' />
        </Form.Group>
      </FormularyContent>

      <Button variant='primary' block>
        Publicar
      </Button>
    </FormularyContainer>
  )
}

function CreateJobHeader () {
  return (
    <BackHeader title='Nueva Chamba'/>
  )
}

const Container = styled.div`
  margin-bottom: 64px;
  
  @media screen and (max-width: 600px) {
    margin-bottom: 0;
  }
`

function CreateJob() {
  return (
    <Container>
      <CreateJobHeader />
      <Formulary />
    </Container>
  )
}

export default CreateJob
