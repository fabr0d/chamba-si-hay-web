import React from 'react'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const user = {
    name: 'Mi Nombre',
    email: 'Mi Correo',
    role: 'collaborator'
  }
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <AuthContext.Provider value={ [user, loading, error] }>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('AuthContext must be within a AuthProvider')
  }
  return context
}
