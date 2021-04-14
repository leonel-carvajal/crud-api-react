import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: scaleX(1.25) scaleY(0.75);
  }
  50% {
    transform: scaleX(0.75) scaleY(1.25);
  }
  60% {
    transform: scaleX(1.15) scaleY(0.85);
  }
`
const Container = styled.div`
  width:90%;
  margin-right:auto;
  margin-left:auto;
  margin-top:1rem;
  border-radius:10px;
  padding:1rem;
  margin-bottom:1rem;
  text-align:center;
  color:#fff;
  font-weight:bold;
  font-size:1.5em;
  background-color:${({ bgColor }) => bgColor};
  animation: ${animation} 1.5s 1;
`
const Message = ({error,bgColor}) => {
  return (
    <Container bgColor={bgColor}>
      <p>{error}</p>
    </Container>
  )
}

export default Message
