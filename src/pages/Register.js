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
`

const FormLabel = styled(Form.Label)`
  color: white;
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
        <Form.Group>
          <FormLabel>Usuario</FormLabel>
          <Form.Control type='text' placeholder='Usuario' name="username" />
        </Form.Group>
        <Form.Group>
          <FormLabel>Email</FormLabel>
          <Form.Control type='email' placeholder='Email' name="email" />
        </Form.Group>
        <Form.Group>
          <FormLabel>Contraseña</FormLabel>
          <Form.Control type='password' placeholder='Contraseña' name="password" />
        </Form.Group>
        <Form.Group>
          <FormLabel>Confirmar Contraseña</FormLabel>
          <Form.Control type='password' placeholder='Contraseña' name="confirmPassword" />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" block style={{ marginTop: 32 }}>
            Confirmar registro
          </Button>
        </Form.Group>
      </Form.Group>
    </Container>
  )
}

export default Register
