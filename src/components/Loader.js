import React from 'react'
//import './Loader.css'
import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`
const Loading = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  border-radius: 50%;
  border-left-color: orange;
  animation: ${Rotate} 1s linear infinite;
`
const Loader = () => {
  return (
    <Loading/>
  )
}

export default Loader
