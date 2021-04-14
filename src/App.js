import React from 'react'
import CrudApp from './components/CrudApp'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    font-family:sans-serif;
    text-align:center;
    }
  table ,td{
    border:1px solid #333;
  }
  th{
    font-size:1.2em;
  }
  table{
    width:80%;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    border-collapse:collapse;
  }
  thead{
    background-color:royalblue;
    color:#fff;
  }
  td{
    padding:0.4em;
  }
  tr:nth-child(even){
    background-color:#98ff98;
  }
`
const App = () => {
  return (
    <>
      <GlobalStyle/>
    <h1>EJECICIO CRUD API REACT</h1>
      <CrudApp/>
    </>
  )
 }
export default App;
