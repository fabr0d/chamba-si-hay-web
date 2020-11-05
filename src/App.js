import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import JobDescription from './pages/JobDescription'
import { SidebarProvider } from './hooks/useSidebar'
import { AuthProvider } from './hooks/useAuth'

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    font-family: Roboto, sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #53C9BD;
`

const AppInnerContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin-top: 100px;
    
    @media screen and (max-width: 600px) {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;

        margin-top: 0;
    }
`

export default function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <AppContainer>
          <AppInnerContainer>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/job-description" component={JobDescription} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </Router>
          </AppInnerContainer>
        </AppContainer>
      </SidebarProvider>
    </AuthProvider>
  );
}


