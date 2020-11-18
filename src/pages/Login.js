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

const FormLabel = styled(Form.Label)`
  color: white;
`

function Login() {
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
          <Form.Control type='text' placeholder='Usuario' name="username"/>
        </Form.Group>

        <Form.Group>
          <FormLabel>Contraseña</FormLabel>
          <Form.Control type='password' placeholder='Contraseña' />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" block style={{ marginTop: 32 }}>
            Iniciar Sesión
          </Button>
          <Button variant="light" block>
            Crear nueva cuenta
          </Button>
        </Form.Group>
      </Form.Group>
    </Container>
  )
}

export default Login
