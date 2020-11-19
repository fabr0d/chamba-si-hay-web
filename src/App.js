import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { ProtectedRoute } from "./components/route/ProtectedRoute";

import { SidebarProvider } from "./hooks/useSidebar";
import { AuthProvider } from "./hooks/useAuth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import JobDescription from "./pages/JobDescription";
import CreateJob from "./pages/CreateJob";
import Chat from "./pages/Chat";
import Map from "./pages/Map";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: Roboto, sans-serif;
  background-color: #53c9bd;

  width: 100vw;
  min-height: 100vh;
`;

const AppInnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 400px;

  min-height: 640px;
  padding-top: 100px;

  @media screen and (max-width: 600px) {
    max-width: 100vw;
    min-height: 100vh;
    padding: 0;
  }
`;

export default function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <AppContainer>
          <AppInnerContainer>
            <Router>
              <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/job-description/:id" component={JobDescription} />
                <Route path="/create-job" component={CreateJob} />
                <Route path="/chat" component={Chat} />
                <Route path="/map" component={Map} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
          </AppInnerContainer>
        </AppContainer>
      </SidebarProvider>
    </AuthProvider>
  );
}

function NotFound() {
  return (
    <div>
      <h3 className={"text-light"}>404 Not Found</h3>
    </div>
  );
}
