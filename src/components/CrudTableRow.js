import React from 'react'
import styled from 'styled-components';
const Button = styled.button`
  width:100px;
  padding:0.7em;
  outline:none;
  background-color:${({ bg }) => bg};
  color:#fff;
  font-weight:600;
  border-radius:10px;
  border:1px solid #ccc;
  cursor:pointer;
`
const CrudTableRow = ({ el, deleteData, setdatatoEdit }) => {
  let {name,constellation,id} = el
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <Button bg={'orange'} onClick={()=>setdatatoEdit(el)}>Editar</Button>
          <Button bg={'tomato'} onClick={()=>deleteData(id)}>Eliminar</Button>
        </td>
      </tr>
    </>
  )
}

export default CrudTableRow;
