import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data,deleteData,setdatatoEdit}) => {
  return (
    <>
      <h2>Tabla de datos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ?
              data.map(el => (
                <CrudTableRow
                  deleteData={deleteData}
                  el={el}
                  key={el.id}
                  setdatatoEdit={setdatatoEdit}
                />
              ))
              :<tr><td colSpan='3'>Sin datos</td></tr> 
          }
        </tbody>
      </table>
    </>
  )
}

export default CrudTable
