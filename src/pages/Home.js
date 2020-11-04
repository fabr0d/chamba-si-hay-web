import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import { ReactComponent as MoneyIcon } from '../assets/money.svg'
import './Home.css'

function JobCard(props) {
  return (
    <div className="jobcard-container" {...props}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
          <h5>Gasfitero</h5>
          <div style={{ fontSize: 12, marginLeft: 12 }}>15 de Julio</div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Button variant="primary" style={{ padding: '4px 16px', fontSize: 12, borderRadius: 16 }}>Aceptar</Button>
          <Button variant="outline-danger" style={{ padding: '4px 16px', fontSize: 12, borderRadius: 16, marginLeft: 12 }}>Rechazar</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30%' }}>
        <div>
          <MoneyIcon />
        </div>
        <div style={{ marginTop: 8 }}>
          <h6>
            S/. 230.00
          </h6>
        </div>
      </div>
    </div>
  )
}

function Announcements() {
  return (
    <div className="announcements-container" style={{ padding: '0 5%' }}>
      <JobCard style={{ marginTop: 24 }}/>
      <JobCard />
      <JobCard />
    </div>
  )
}

function Header () {
  return (
    <Navbar style={{ padding: 0 }}>
      <div style={{ width: '100%' }}>
        <div style={ { display: 'flex', flexDirection: 'row' } }>
          <FontAwesomeIcon icon={ faBars } color='white' size='2x' />
          <h2 style={{ marginLeft: 16 }}>
            Trabajos
          </h2>
        </div>
        <div>
          <div style={ { background: 'white', borderRadius: 50 } }>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text style={ { background: 'transparent', border: '1px solid transparent' } }>
                  <FontAwesomeIcon icon={ faSearch } color='#53C9BD' size='lg' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                style={ { display: 'flex', flexGrow: 1, border: 0, borderRadius: 50 } }
                type='text'
                placeholder='Buscar siguiente empleo'
                name='search'
              />
            </InputGroup>
          </div>
        </div>
        <Nav className="justify-content-center" variant='tabs' defaultActiveKey='announcements' style={ { marginTop: 32 } }>
          <Nav.Item>
            <Nav.Link href='#' eventKey='announcements'>Anuncios</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#' eventKey='accepted'>Aceptados</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#' eventKey='rejected'>Rechazados</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  )
}

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Announcements />
    </div>
  )
}

export default Home
