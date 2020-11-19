import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import BootstrapButton from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import MenuHeader from "../components/MenuHeader";
import { ReactComponent as MoneyIcon } from "../assets/money.svg";
import { useAuth } from "../hooks/useAuth";
import JobService from "../services/JobService";

const JobCardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 16px;
  border-radius: 10px;
  width: 100%;
`;

const JobCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const JobCardMoney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const JobCardButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled(BootstrapButton)`
  padding: 4px 16px;
  font-size: 12px;
  border-radius: 16px;
`;

function JobCard({ role, item, ...props }) {
  const href = `/job-description/${item._id}`;

  return (
    <JobCardContainer {...props}>
      <JobCardDescription>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <h5>{item.title}</h5>
          <div style={{ fontSize: 12, marginLeft: 12 }}>
            {" "}
            {new Date(item.startDate).toDateString()}
          </div>
        </div>
        <div>
          <p>{item.description}</p>
        </div>

        <JobCardButtons>
          {role === "collaborator" && (
            <>
              <Button variant="primary" href={href}>
                Aceptar
              </Button>
              <Button variant="outline-danger" href={href}>
                Rechazar
              </Button>
            </>
          )}

          {role === "employer" && (
            <Button variant="outline-danger" href={href}>
              Cancelar
            </Button>
          )}
        </JobCardButtons>
      </JobCardDescription>

      <JobCardMoney>
        <div>
          <MoneyIcon />
        </div>
        <div style={{ marginTop: 8 }}>
          <h6>S/. {item.amount}</h6>
        </div>
      </JobCardMoney>
    </JobCardContainer>
  );
}

const ButtonAddJob = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 5,
        right: 10,
      }}
    >
      <a
        href="/create-job"
        style={{
          backgroundColor: "#00988D",
          height: 60,
          width: 60,
          borderRadius: 30,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: 30 }} />
        </span>
      </a>
    </div>
  );
};

const AnnouncementsContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 16px;

  padding: 24px 6% 10% 6%;
  min-height: 100%;
`;

function Announcements({ role }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const result =
        role === "employer"
          ? await JobService.getMyPublishJobs()
          : await JobService.getAllJobs();

      if (result.status === 200) {
        const data = result.response || [];
        setJobs(data);
      }
    };

    getJobs();
  }, []);

  return (
    <AnnouncementsContainer>
      {jobs.map((item, index) => (
        <JobCard key={(index + 1).toString()} item={item} role={role} />
      ))}

      {role === "employer" && <ButtonAddJob />}
    </AnnouncementsContainer>
  );
}

const Searcher = styled.div`
  background-color: white;
  border-radius: 50px;
`;

function HomeHeader({ role }) {
  return (
    <MenuHeader
      title={role === "collaborator" ? "Mis Trabajos" : "Mis Propuestas"}
    >
      {role === "collaborator" && (
        <Searcher>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              >
                <FontAwesomeIcon icon={faSearch} color="#53C9BD" size="lg" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              style={{
                display: "flex",
                flexGrow: 1,
                border: 0,
                borderRadius: 50,
              }}
              type="text"
              placeholder="Buscar siguiente empleo"
              name="search"
            />
          </InputGroup>
        </Searcher>
      )}

      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey="announcements"
        style={{ marginTop: 32 }}
      >
        {role === "collaborator" ? (
          <>
            <Nav.Item>
              <Nav.Link href="#" eventKey="announcements">
                Anuncios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="accepted">
                Aceptados
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="rejected">
                Rechazados
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link href="#" eventKey="announcements">
                Activos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="accepted">
                Vencidos
              </Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>
    </MenuHeader>
  );
}

const Container = styled.div`
  min-height: 640px;
`;

function Home() {
  const [user] = useAuth();

  return (
    <Container>
      <HomeHeader role={user.role} />
      <Announcements role={user.role} />
    </Container>
  );
}

export default Home;
