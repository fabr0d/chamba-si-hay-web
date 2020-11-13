import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useSidebar } from '../hooks/useSidebar'

const InnerNavbar = styled.div`
  width: 100%;
`

const NavItem = styled(Nav.Item)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`

function Header () {
  const [toggle] = useSidebar()
  const location = useLocation()

  return (
    <Navbar style={{ padding: 0 }}>
      <InnerNavbar>
        <div onClick={toggle} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={ faBars }
            color='white'
            size='2x'
          />
        </div>

        <Nav variant='tabs' activeKey={ location.pathname.slice(1) } style={{ padding: '0 16px' }}>
          <NavItem>
            <Nav.Link href='/chat' eventKey='chat'>Chat</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href='/map' eventKey='map'>Mapa</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href='#' eventKey='details'>Detalle</Nav.Link>
          </NavItem>
        </Nav>
      </InnerNavbar>
    </Navbar>
  )
}

export default Header
