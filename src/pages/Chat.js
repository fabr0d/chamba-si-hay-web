import React from 'react'
import styled from 'styled-components'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import JobHeader from '../components/JobHeader'

const MessagesContainer = styled.div`
  background-color: #EEEEEE;
  padding: 16px 32px;
`

const MessagesInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const MessageContainer = styled.div`
  width: 100%;
`

const MessageInnerContainer = styled.div`
  width: 60%;
  padding: 12px 16px;
  background-color: ${props => props.isFromOwner? '#00988D': 'white'};
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  
  margin-left: ${props => props.isFromOwner? 'auto': undefined};
`

function Message({ children: text, isFromOwner = false }) {
  return (
    <MessageContainer>
      <MessageInnerContainer isFromOwner={isFromOwner}>
        <div style={{ color: isFromOwner ? 'white': '#00988D', marginBottom: -8, fontSize: 14 }}>
          { text }
        </div>
        <div style={{ color: isFromOwner ? '#E5E5E5': undefined, alignSelf: 'flex-end', fontSize: 12 }}>
          16:05 h
        </div>
      </MessageInnerContainer>
    </MessageContainer>
  )
}

const InputMessage = styled.div`
  margin-top: 32px;
  background-color: white;
  border-radius: 50px;
`

function Messages() {
  return (
    <MessagesContainer>
      <MessagesInnerContainer>
        <Message>
          Mensaje 1
        </Message>
        <Message>
          Mensaje 2
        </Message>
        <Message isFromOwner>
          Mensaje 3
        </Message>
      </MessagesInnerContainer>

      <InputMessage>
        <InputGroup>
          <Form.Control
            style={ { display: 'flex', flexGrow: 1, border: 0, borderRadius: 50 } }
            type='text'
            name='message'
            autoComplete='off'
          />
          <InputGroup.Append>
            <InputGroup.Text style={ { background: 'transparent', border: '1px solid transparent' } }>
              <FontAwesomeIcon icon={ faPaperPlane } color='black' size='lg' />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </InputMessage>
    </MessagesContainer>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function Chat() {
  return (
    <Container>
      <JobHeader />
      <Messages />
    </Container>
  )
}

export default Chat
