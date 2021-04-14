import React,{useState,useEffect} from 'react'
import styled from 'styled-components';


const initialForm = {
  name: '',
  constellation:'',
  id:null
}
const InputText = styled.input`
  padding:0.8em;
  outline:none;
  border:1px solid #333;
  border-radius:5px;
  margin-right:10px;
  text-align:center;
`
const InputButton = styled.input`
  width:75px;
  padding:0.8em;
  outline:none;
  border:1px solid #333;
  margin-right:10px;
  border-radius:10px;
  background-color:${({ bg }) => bg};
  color:#fff;
  font-size:1em;
`
const CrudForm = ({ createData, datatoEdit, setdatatoEdit, updateData }) => {
  const [form, setform] = useState(initialForm);
  useEffect(() => {
    if (datatoEdit) {
      setform(datatoEdit)
    } else {
      setform(initialForm)
    }
  }, [datatoEdit]);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name|| !form.constellation) {
      window.alert('Datos incompletos')
      return;
    }
    if (form.id === null) {
      createData(form)
    } else {
      updateData(form)
    }
    handleReset()
  }
  const handleReset = () => {
    setform(initialForm)
    setdatatoEdit(null)
  }
  
  return (
    <div>
      <h3>{datatoEdit ? 'Editar':'Agregar'}</h3>
      <form  onSubmit={handleSubmit}>
        <InputText
          name='name'
          onChange={handleChange}
          placeholder='Nombre'
          type='text'
          value={form.name}
        />
        <InputText
          name='constellation'
          onChange={handleChange}
          placeholder='constelación'
          type='text'
          value={form.constellation}
        />
        <InputButton type='submit' value='Enviar' bg={'#924e7d'} />
        <InputButton type='reset' value='Limpiar' onClick={handleReset} bg='#3b83bd'/>
      </form>
    </div>
  )
}

export default CrudForm
