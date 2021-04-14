import React ,{useState,useEffect} from 'react'
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader';
import Message from './Message';


const CrudApp = () => {
  const [bd, setBd] = useState(null);
  const [datatoEdit, setdatatoEdit] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false);
  let api = helpHttp()
  let url = `http://localhost:4000/santos`;
  
  useEffect(() => {
    setLoading(true)
    helpHttp()
      .get(url).then(res => {
      if (!res.err) {
        setBd(res)
        setError(null)
      } else {
        setError(res)
        setBd(null)
      }
      setLoading(false)
    });
    
  }, [url]);


  const createData  =(data)=>{
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    }
    
    api.post(url, options).then(res => {
      console.log(res)
      if (!res.err) {
        setBd([...bd,res])
      } else {
        setError(res)
      }
    })
    setBd([...bd, data]);
  }

  const updateData = (data) => {  
    let endpoint = `${url}/${data.id}`
    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    }

    api.put(endpoint, options).then(res => {
      if (!res.err) {
        let newData = bd.map(el => el.id === data.id ? data : el)
        setBd(newData)
      } else {
        setError(res)
      }
    })
  }
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id: ${id}?`)
    if (isDelete) {
      let endpoint = `${url}/${id}`
      let options = {
        headers: { "content-type": "application/json" }
      }
      api.del(endpoint, options).then(res => {
        if (!res.err) {
          let newData = bd.filter(el => el.id !== id)
          setBd(newData)
        } else {
          setError(res)
        }
      })
    } else {
      return;
    }
  }

  return (
    <div>
      <h2>CRUD API</h2>
      <CrudForm
        createData={createData}
        datatoEdit={datatoEdit}
        setdatatoEdit={setdatatoEdit}
        updateData={updateData}
      />
      {loading && <Loader />}
      {error && <Message
        error={`Error: ${error.status} ${error.statusText}`}
        bgColor={'#dc3545'}
      />}
      {bd && <CrudTable
          data={bd}
          deleteData={deleteData}
          setdatatoEdit={setdatatoEdit}
        />
      }
    </div>
  )
}

export default CrudApp
