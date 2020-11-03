import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ReactComponent as Logo } from '../assets/logo.svg'
import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <div style={{ marginTop: 50 }}>
        <Logo/>
      </div>

      <h1>Chamba Si</h1>
      <h1>Hay</h1>

      <Form.Group style={{ width: '100%' }}>
        <Form.Label>Usuario</Form.Label>
        <Form.Control type='text' placeholder='Usuario' name="username"/>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='password' placeholder='Contraseña' />
        <Button variant="primary" block style={{ marginTop: 32 }}>
          Iniciar Sesión
        </Button>
        <Button variant="light" block>
          Registrarse
        </Button>
      </Form.Group>
    </div>
  )
}

export default Login
