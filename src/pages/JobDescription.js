import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './JobDescription.css'

function Description() {
  return (
    <div className="description-container">
      <div className="description-card-container">
        <div className='job-label'>Oferta</div>
        <h2>S/. 230.00</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className='job-label'>Puesto</div>
          <div className='job-value'>Gasfitero</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className='job-label'>Lugar</div>
          <div className='job-value'>Paucarpata</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className='job-label'>Fecha</div>
          <div className='job-value'>4:45 Hoy</div>
        </div>
      </div>
      <div>
        <h4>Descripción:</h4>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sad
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 32 }}>
        <Button variant='outline-primary'>
          Aceptar
        </Button>
        <Button variant='danger'>
          Rechazar
        </Button>
      </div>
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
            Descripción del trabajo
          </h2>
        </div>
      </div>
    </Navbar>
  )
}

function JobDescription() {
  return (
    <div className="jobdescription-container">
      <Header />
      <Description/>
    </div>
  )
}

export default JobDescription
