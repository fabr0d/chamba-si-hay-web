import React, {useState} from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Logo from '../assets/logo.svg'
import AuthService from '../services/AuthService'

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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const userRegister = async() => {
    const user = {
      firstName: name,
      lastName: lastName,
      email: email,
      password: password
    }
    const result = await AuthService.register(user);
    const {status} = result;
    if(status === 200){
      window.location.href = "/";
    }
    else{
      alert("Error en registro")
    }
  }


  return (
    <Container>
      <div style={{ marginTop: 50 }}>
        <img src={Logo} alt='' />
      </div>

      <h1>Chamba Si</h1>
      <h1>Hay</h1>

      <Form.Group style={{ width: '100%' }}>
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type='text' placeholder='Nombre' name="name" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='Apellido' name="lastname" />
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' name="email" />
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Contraseña' name="password" />
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control onChange={(e)=>setRePassword(e.target.value)} type='password' placeholder='Contraseña' name="confirmPassword" />
        <Button onClick={userRegister} variant="primary" block style={{ marginTop: 32 }}>
          Confirmar registro
        </Button>
      </Form.Group>
    </Container>
  )
}

export default Register
