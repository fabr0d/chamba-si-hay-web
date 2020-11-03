import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ReactComponent as Logo } from '../assets/logo.svg'
import './Register.css'

function Register() {
  return (
    <div className="register-container">
      <div style={{ marginTop: 50 }}>
        <Logo/>
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
    </div>
  )
}

export default Register
