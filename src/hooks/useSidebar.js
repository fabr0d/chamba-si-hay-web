import React, { createContext, useContext, useState } from 'react'
import Sidebar from 'react-sidebar'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import AuthService from '../services/AuthService';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg'
import { useAuth } from './useAuth'
import { swapUserType } from '../helpers/UserTypeHelper';

const SidebarContainer = styled.div`
  background-color: #00988D;
  height: 100%;
  width: 100%;
  padding-top: 64px;
  padding-left: 16px;
  padding-right: 16px;
  color: white;
`

const UserInformation = styled.div`
  display: flex;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  margin-top: 32px;
`

function SidebarContent() {
  const [user, loading, error] = useAuth()

  const logoutUser = () =>{
    AuthService.logout();
    window.location.href = "/";
  }

  const changeUserType = () => {
    swapUserType()
    window.location.href = "/";
  }

  return (
    <SidebarContainer>
      <UserInformation>
        <ProfileIcon />
        <div style={{ marginLeft: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h6>
            { user.name }
          </h6>
          <div style={{ fontSize: 14 }}>
            { user.email }
          </div>
        </div>
      </UserInformation>

      <Navigation>
        <div>
          Inicio
        </div>
        <div style={{ color: '#C4C4C4' }}>
          Mis Trabajos
        </div>
        <div style={{ color: '#C4C4C4' }}>
          Perfil
        </div>
      </Navigation>

      <div style={{ marginTop: 64 }}>
        <Button
          onClick={changeUserType}
          variant='outline-but-invalid'
          style={{ border: '1px solid white', color: 'white', borderRadius: 20 }}
        >
          Cambiar a { user.role === 'employer'? "Colaborador": "Empleador" }
        </Button>
      </div>
      <hr color='#EEEEEE' style={{ margin: '16px -16px' }} />

      <Navigation>
        <div style={{ color: '#C4C4C4' }}>
          Configuración
        </div>
        <div onClick={logoutUser} style={{ color: '#C4C4C4' }}>
          Cerrar Sesión
        </div>
      </Navigation>
    </SidebarContainer>
  )
}

const SidebarContext = createContext(undefined)

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <SidebarContext.Provider value={ [ toggle ] }>
      <Sidebar
        sidebar={<SidebarContent />}
        open={open}
        onSetOpen={open => setOpen(open)}
        styles={{ sidebar: { background: "white" } }}
      >
        { children }
      </Sidebar>
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('SidebarContext must be within a SidebarProvider')
  }
  return context
}
