import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Logo from '../assets/logo.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 64px;
  width: 100%;

  background: linear-gradient(rgba(0, 152, 141, 0.68), rgba(0, 152, 141, 0.68)),
  url("/assets/login-register-background.jpg");
  background-size: cover;
  
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`

function Register() {
  return (
    <Container>
      <div style={{ marginTop: 50 }}>
        <img src={Logo} alt='' />
      </div>

      <h1>Chamba Si</h1>
      <h1>Hay</h1>

      <Form.Group style={{ width: '100%' }}>
        <Form.Label>Usuario</Form.Label>
        <Form.Control type='text' placeholder='Usuario' name="username" />
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='Email' name="email" />
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='password' placeholder='Contraseña' name="password" />
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type='password' placeholder='Contraseña' name="confirmPassword" />
        <Button variant="primary" block style={{ marginTop: 32 }}>
          Confirmar registro
        </Button>
      </Form.Group>
    </Container>
  )
}

export default Register
