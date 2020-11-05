import React from 'react'
import styled from 'styled-components'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import { useSidebar } from '../hooks/useSidebar'
import { ReactComponent as MoneyIcon } from '../assets/money.svg'
import { useAuth } from '../hooks/useAuth'

const JobCardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 16px;
  border-radius: 10px;
  width: 100%;
`

const JobCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const JobCardMoney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`

const JobCardButtons = styled.div`
  display: flex;
  gap: 16px;
`

function JobCard({ role, ...props }) {
  return (
    <JobCardContainer {...props}>
      <JobCardDescription>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
          <h5>Gasfitero</h5>
          <div style={{ fontSize: 12, marginLeft: 12 }}>15 de Julio</div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <JobCardButtons>
          {
            role === 'collaborator' &&
              <Button variant="primary" style={{ padding: '4px 16px', fontSize: 12, borderRadius: 16 }}>Aceptar</Button>
          }
          <Button variant="outline-danger" style={{ padding: '4px 16px', fontSize: 12, borderRadius: 16 }}>Rechazar</Button>
        </JobCardButtons>
      </JobCardDescription>

      <JobCardMoney>
        <div>
          <MoneyIcon />
        </div>
        <div style={{ marginTop: 8 }}>
          <h6>
            S/. 230.00
          </h6>
        </div>
      </JobCardMoney>
    </JobCardContainer>
  )
}

const AnnouncementsContainer = styled.div`
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  padding: 24px 5% 0 5%;
`

function Announcements({ role }) {
  return (
    <AnnouncementsContainer>
      <JobCard role={role} />
      <JobCard role={role} />
      <JobCard role={role} />
    </AnnouncementsContainer>
  )
}

const InnerNavbar = styled.div`
  width: 100%;
`

const BarsAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`

const Searcher = styled.div`
  background-color: white;
  border-radius: 50px;
`

function Header ({ role }) {
  const [toggle] = useSidebar()

  return (
    <Navbar style={{ padding: 0 }}>
      <InnerNavbar>
        <BarsAndTitle>
          <div onClick={toggle} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
              icon={ faBars }
              color='white'
              size='2x'
            />
          </div>
          <h2 style={{ marginLeft: 16 }}>
            { role === 'collaborator'? "Mis Trabajos": "Mis Propuestas" }
          </h2>
        </BarsAndTitle>

        {
          role === 'collaborator' &&
            <Searcher>
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
            </Searcher>
        }

        <Nav className="justify-content-center" variant='tabs' defaultActiveKey='announcements' style={ { marginTop: 32 } }>
          {
            role === 'collaborator'?
              <>
                <Nav.Item>
                  <Nav.Link href='#' eventKey='announcements'>Anuncios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#' eventKey='accepted'>Aceptados</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#' eventKey='rejected'>Rechazados</Nav.Link>
                </Nav.Item>
              </>
            :
              <>
                <Nav.Item>
                  <Nav.Link href='#' eventKey='announcements'>Activos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#' eventKey='accepted'>Vencidos</Nav.Link>
                </Nav.Item>
              </>
          }
        </Nav>
      </InnerNavbar>
    </Navbar>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function Home() {
  const [user, loading, error] = useAuth()

  return (
    <Container>
      <Header role={user.role} />
      <Announcements role={user.role} />
    </Container>
  )
}

export default Home
