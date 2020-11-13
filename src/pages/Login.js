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

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async() =>{
    const result = await AuthService.login(username, password);
    const {status, data} = result;
    if(status === 200){
      AuthService.storageToken(data.token);
      window.location.href = "/";
    }
    else{
      alert("Datos incorrectos");
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
        <Form.Label>Usuario</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Usuario' name="username"/>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Contraseña' />
        <Button onClick={userLogin} variant="primary" block style={{ marginTop: 32, backgroundColor:"#53C9BD" }}>
          Iniciar Sesión
        </Button>
        <Button variant="light" block href="/register">
          Crear cuenta
        </Button>
      </Form.Group>
    </Container>
  )
}

export default Login
