import React from 'react'
import InternalHeader from './InternalHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const IconButton = styled.div`
  cursor: pointer;
`

const IconAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

function BackHeader({ title, children, onBack }) {
  return (
    <InternalHeader>
      <IconAndTitle>
        <IconButton onClick={onBack}>
          <FontAwesomeIcon icon={ faChevronLeft } color='white' size='lg' />
        </IconButton>

        <h2 style={{ marginLeft: 16 }}>
          { title }
        </h2>
      </IconAndTitle>
      { children }
    </InternalHeader>
  )
}

export default BackHeader
