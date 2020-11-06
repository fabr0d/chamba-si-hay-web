import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

import JobHeader from '../components/JobHeader'

const AnyReactComponent = ({ text }) => <div style={{ color: 'blue' }}>{text}</div>;

const MapContainer = styled.div`
  background-color: #EEEEEE;
  padding: 16px 32px;
  height: 60vh;
  width: 100%;
`

function MapContent() {
  const props = {
    center: {
      lat: -16.40,
      lng: -71.54
    },
    zoom: 15
  }

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // key for production: AIzaSyAEZIBehyz9ZqxGod3yppy4qH1NVhYuWMo
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent
          lat={-16.40}
          lng={-71.54}
          text="Se necesita urgente un carpintero aquí!"
        />
      </GoogleMapReact>
    </MapContainer>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function Map() {
  return (
    <Container>
      <JobHeader />
      <MapContent />
    </Container>
  )
}

export default Map
