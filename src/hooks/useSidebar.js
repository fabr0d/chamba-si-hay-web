import React, { createContext, useContext, useState } from 'react'
import Sidebar from 'react-sidebar'
import { ReactComponent as ProfileIcon } from '../assets/profile.svg'
import Button from 'react-bootstrap/Button'

const sidebarContainer = {
  backgroundColor: '#00988D',
  height: '100%',
  width: '100%',
  paddingTop: 64,
  paddingLeft: 16,
  paddingRight: 16,
  color: 'white'
}

function SidebarContent() {
  return (
    <div style={sidebarContainer}>
      <div style={{ display: 'flex' }}>
        <ProfileIcon />
        <div style={{ marginLeft: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h6>Nombre</h6>
          <div style={{ fontSize: 14 }}>Email</div>
        </div>
      </div>
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          Inicio
        </div>
        <div style={{ color: '#C4C4C4' }}>
          Mis Trabajos
        </div>
        <div style={{ color: '#C4C4C4' }}>
          Perfil
        </div>
      </div>
      <div style={{ marginTop: 64 }}>
        <Button variant='outline-but-invalid' style={{ border: '1px solid white', color: 'white', borderRadius: 20 }} >
          Cambiar a Empleador
        </Button>
      </div>
      <hr color='#EEEEEE' style={{ margin: '16px -16px' }} />
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ color: '#C4C4C4' }}>
          Configuración
        </div>
        <div style={{ color: '#C4C4C4' }}>
          Cerrar Sesión
        </div>
      </div>
    </div>
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
