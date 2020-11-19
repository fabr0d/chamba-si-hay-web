import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

import JobHeader from "../components/JobHeader";

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "blue" }}>{text}</div>
);

const MapContainer = styled.div`
  background-color: #eeeeee;
  padding: 16px 32px;
  flex-grow: 1;
`;

function MapContent() {
  const props = {
    center: {
      lat: -16.4,
      lng: -71.54,
    },
    zoom: 15,
  };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // key for production: AIzaSyAEZIBehyz9ZqxGod3yppy4qH1NVhYuWMo
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent
          lat={-16.4}
          lng={-71.54}
          text="Se necesita urgente un carpintero aquí!"
        />
      </GoogleMapReact>
    </MapContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 640px;

  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

function Map() {
  return (
    <Container>
      <JobHeader />
      <MapContent />
    </Container>
  );
}

export default Map;
